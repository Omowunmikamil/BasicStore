import { createContext, useState, useEffect } from "react";
import { products as productData } from "../assets/assets"; // Import the products array

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // Initialize the products state with the imported array
  const [products, setProducts] = useState(productData);

  const currency = "$";
  const deliveryFee = 50;

  useEffect(() => {
    console.log("Products in Context:", products); // Debug log
  }, [products]);

  // Create a value object to hold all the context data
  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
