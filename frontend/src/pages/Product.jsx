import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Button from "../components/Button";

const Product = () => {
  const { productId } = useParams(); // Get product ID from the URL params
  const { products, currency, addToCart, updateCartQuantity, navigate } =
    useContext(ShopContext); // Get data from ShopContext
  const [productData, setProductData] = useState(false); // State to store the product data
  const [image, setImage] = useState(""); // State for the currently displayed image
  const [color, setColor] = useState("");
  const [counter, setCount] = useState(0);

  // Handle the increment button click
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
    updateCartQuantity(productData._id, color, counter + 1); // Update the cart
  };

  // Handle the decrement button click
  const decrementHandler = () => {
    if (counter > 0) {
      setCount((prevCount) => prevCount - 1);
      updateCartQuantity(productData._id, color, counter - 1); // Update the cart
    }
  };

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

  const handleBuyNowNavigate = () => {
    updateCartQuantity(productData._id, color, counter + 1); // Update the cart
    navigate("/place-order"); // Navigate to the place order page
  };

  return (
    <div className="border-t-2 transition-opacity ease-in duration-500 opacity-100 pt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product images */}
        <div className="flex-1 gap-3 flex flex-col-reverse ">
          {/* Thumbnail images for selecting the main image */}
          <div className="flex  overflow-x-auto sm:overflow-x-visible sm:justify-normal w-full sm:w-[28%]">
            {productData.image?.map(
              (
                item,
                index // Map through all product images
              ) => (
                <img
                  key={index}
                  src={item}
                  alt={productData.name}
                  onClick={() => setImage(item)} // Set the clicked image as the main image
                  className="w-[24%] sm:w-full bg-bestBg shadow-sm py-3 px-2 flex-shrink-0 sm:mb-3 cursor-pointer hover:rounded-xl hover:border-4 hover:border-orange"
                />
              )
            )}
          </div>
          <div className="w-full sm:w-[100%] h-[24rem] md:h-[34rem]">
            {/* Display the main image */}
            <img
              src={image}
              className="w-full h-full bg-bestBg"
              alt={productData.name}
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

          {/* Product Description */}
          <p className="md:w-4/5 text-sm text-gray-500 mt-4">
            {productData.description}
          </p>

          {/* Product Color */}
          <div className="flex-col gap-4 my-5">
            <p className="text-sm font-bold text-text underline">Colors</p>
            <div className="flex gap-2">
              {productData.colors?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setColor(item)}
                  className={`border py-1 px-2 rounded-md mt-2 text-gray-600 text-sm cursor-pointer ${
                    item === color ? "border-orange" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Product Quantity */}
          <div className="flex gap-1 items-center mt-8">
            {/* Decrement button */}
            <button
              className="bg-white text-gray-500 text-sm px-2 py-1 font-bold border border-gray-50 rounded-md cursor-pointer hover:border-orange shadow-md"
              onClick={decrementHandler}
              disabled={counter === 0}
            >
              -
            </button>

            {/* Quantity Display */}
            <p className="bg-white text-gray-500 text-sm px-6 py-1 font-bold border border-gray-50 rounded-md shadow-md">
              {counter}
            </p>

            {/* Increment button */}
            <button
              className="bg-white text-gray-500 text-sm px-2 py-1 font-bold border border-gray-50 rounded-md cursor-pointer hover:border-orange shadow-md"
              onClick={incrementHandler}
            >
              +
            </button>
          </div>

          {/* Buy Now and  Add to Cart Button */}
          <div className="flex gap-2 mt-4">
            <button
              className="bg-orange text-xs md-text-sm text-white py-3 px-8 rounded-full hover:bg-orangehover hover:text-text"
              onClick={handleBuyNowNavigate}
            >
              BUY NOW
            </button>
            <Button
              onClick={() => {
                addToCart(productData._id, color);
              }}
              text={"ADD TO CART"}
            />
          </div>
          <div className="flex flex-col text-gray-400 text-xs gap-1 mt-5">
            <p className="">SKU: 1223</p>
            <p className="">2-3 business days delivery & free returns</p>
            <p className="">Tags: Classic, Modern</p>
          </div>
        </div>
      </div>

      {/* Description,  Additional Info, and Review */}
      <div className="mt-20">
        <div className="flex justify-center gap-10 border-b border-tesBorder pb-4">
          <p className="text-orange text-sm md:text-2xl">Description</p>
          <p className=" text-sm md:text-2xl">Additional Infomations</p>
          <p className=" text-sm md:text-2xl">Reviews (2)</p>
        </div>

        {/* Descriptions */}
        <div className="my-5">
          <p className="text-sm text-gray-500">Product Description</p>
          <p className="text-gray-500 text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede.
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus
            ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
            ligula vulputate sem tristique cursus.
            <br />
            &nbsp; &nbsp; &#x25cf; &nbsp; Donec nec justo eget felis facilisis
            fermentum <br /> &nbsp; &nbsp; &#x25cf; &nbsp; Suspendisse urna
            viverra non, semper suscipit pede.
          </p>
          <p className="text-gray-500 text-sm ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede.
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus
            ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
            ligula vulputate sem tristique cursus.
          </p>
        </div>
      </div>

      {/* Related Products */}
    </div>
  );
};

export default Product;
