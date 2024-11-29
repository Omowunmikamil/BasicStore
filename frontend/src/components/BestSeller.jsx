import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  // Accessing the product data from ShopContext
  const { products } = useContext(ShopContext);
  const navigate = useNavigate();

  // State to store the filtered best-selling products
  const [bestSellers, setBestSellers] = useState([]);

  const navigateToShop = () => {
    // Navigate to the shop page
    navigate("/shop");
  };

  useEffect(() => {
    // Filtering products marked as bestsellers
    const bestProducts = products.filter((item) => item.bestseller === true);

    // Setting only the top 5 best-selling products in state
    setBestSellers(bestProducts.slice(0, 8));
  }, [products]); // Adding `products` as a dependency to run this effect when `products` changes

  return (
    <div className="my-10">
      <h2>Best Selling Items</h2>

      {/* Rendering Latest Collection Products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 gap-y-6">
        {bestSellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      <div className="flex justify-center my-8">
        <button
          onClick={navigateToShop}
          className="text-xs md-text-sm text-white bg-gray-800 py-2 px-4 rounded-full hover:bg-gray-600"
        >
          GO TO SHOP
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
