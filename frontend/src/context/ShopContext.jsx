import { createContext, useState, useEffect } from "react";
import { products as productData } from "../assets/assets"; // Import the products array
import { blogPosts as blogPostsData } from "../assets/assets"; // Import the blog posts array
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // Initialize the products state with the imported array
  const [products, setProducts] = useState(productData);
  const [blogPosts, setBlogPost] = useState(blogPostsData);

  const navigate = useNavigate();

  const currency = "$";
  const deliveryFee = 50;

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
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
