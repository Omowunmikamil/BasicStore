import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams(); // Get product ID from the URL params
  const { products, currency, addToCart } = useContext(ShopContext); // Get data from ShopContext
  const [productData, setProductData] = useState(false); // State to store the product data
  const [image, setImage] = useState(""); // State for the currently displayed image

  // Function to fetch the product data based on productId
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        // Check if product ID matches
        setProductData(item); // Set the product data
        setImage(item.image[0]); // Set the first image as the default
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData(); // Fetch product data on component mount or when products/productId change
  }, [products, productId]);

  return (
    <div className="border-t-2 transition-opacity ease-in duration-500 opacity-100 pt-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product images */}
        <div className="flex-1 gap-3 flex flex-col-reverse ">
          {/* Thumbnail images for selecting the main image */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%] ">
            {productData.image?.map(
              (
                item,
                index // Map through all product images
              ) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  onClick={() => setImage(item)} // Set the clicked image as the main image
                  className="w-[24%] sm:w-full bg-bestBg shadow-sm py-3 px-2 flex-shrink-0 sm:mb-3 cursor-pointer hover:rounded-xl hover:border-4 hover:border-orange"
                />
              )
            )}
          </div>
          <div className="w-full sm:w-[100%]">
            {/* Display the main image */}
            <img
              src={image}
              className="w-full h-auto bg-bestBg py-3 px-2"
              alt=""
            />
          </div>
        </div>

        {/*----- Product Information -----*/}
        <div className="flex-1">
          <h2 className="text-left mb-3">{productData.name}</h2>
          <div className="flex items-center gap-2">
            <img src={assets.rate} alt="rate" className="w-3.5" />
            <p className="text-sm text-gray-400">5.0</p>
          </div>

          {/* Product Price */}
          <p className="text-3xl text-orange font-medium mt-4">
            {currency}
            {productData.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
