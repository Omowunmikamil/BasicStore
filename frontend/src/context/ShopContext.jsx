import { createContext, useState, useEffect } from "react";
import { products as productData } from "../assets/assets"; // Import the products array
import { blogPosts as blogPostsData } from "../assets/assets"; // Import the blog posts array
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // Initialize the products state with the imported array
  const [products, setProducts] = useState(productData);
  const [blogPosts, setBlogPost] = useState(blogPostsData);
  const [search, setSearch] = useState(" ");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const currency = "$";
  const deliveryFee = 50;

  // Function to add a product to the cart
  const addToCart = async (itemId, color) => {
    // Check if the color is provided
    if (!color) {
      toast.error("Provide a product color");
      return;
    }

    let cartData = structuredClone(cartItems); // Clone the cart data to avoid mutating the state directly

    // Check if the item is already in the cart and if the selected color exists in the cart data
    if (cartData[itemId]) {
      // If the item already exists in the cart
      if (cartData[itemId][color]) {
        cartData[itemId][color] += 1;
      } else {
        cartData[itemId][color] = 1; // If the size is new, add it to the cart with quantity 1
      }
    } else {
      // If the item doesn't exist in the cart, create a new entry for it
      cartData[itemId] = {};
      cartData[itemId][color] = 1;
    }

    setCartItems(cartData); // Update the cart data with the new data
  };

  // Function to get total item Count in the cart
  const getCartCount = () => {
    let totalCount = 0;

    // Iterate through each item in the cart
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalCount;
  };

  const updateCartQuantity = async (itemId, color, quantity) => {
    let cartData = structuredClone(cartItems); // Clone the cart data to avoid mutating the state directly

    // Check if the item and color exist in the cart data
    if (cartData[itemId]) {
      if (quantity === 0) {
        if (cartData[itemId][color]) {
          delete cartData[itemId][color]; // Remove the item from the cart

          // If no items left for the color, remove the color entry from the cart
          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId]; // If no items left for the item, remove the item entry from the cart
          }
        }
      }
    } else {
      cartData[itemId][color] = quantity; // Update the quantity of the item, if it exists in the cart
    }

    setCartItems(cartData); // Update the cart data with the new data
  };

  useEffect(() => {
    console.log("Products in Context:", products); // Debug log
  }, [products]);

  useEffect(() => {
    console.log("Blog post in Context:", blogPosts); // Debug log
  }, [blogPosts]);

  // Create a value object to hold all the context data
  const value = {
    products,
    currency,
    deliveryFee,
    navigate,
    blogPosts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateCartQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
