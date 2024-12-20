import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import HerderBanner from "../components/HerderBanner";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, cartItems, currency, updateCartQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
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

  useEffect(() => {
    const tempCartData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item]) {
          tempCartData.push({
            _id: items,
            color: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempCartData);
  }, [cartItems]);

  return (
    <div className="">
      <HerderBanner h1={"Cart"} text1={"Home"} text2={"Cart"} href={"/cart"} />

      <div className="mt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 mb-5">
          <p className="font-medium text-sm text-text">Product</p>
          <p className="font-medium text-sm text-text">Quantity</p>
          <p className="font-medium text-sm text-text">Remove</p>
        </div>

        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="text-gray-700 border-t border-b py-4 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Product image */}
              <div className="flex items-start gap-4 md:gap-6">
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-16 sm:w-20 bg-bestBg"
                />
                {/* Product Info */}
                <div className="my-auto">
                  <p className="text-base font-medium">{productData.name}</p>
                  <div className="flex items-center gap-3">
                    <p className="text-base text-orange font-normal">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="border border-bestBorder py-1 px-2 rounded-md text-sm">
                      {item.color}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Quantity */}
              <div className="flex gap-1 items-center my-auto">
                {/* Decrement button */}
                <button
                  className="bg-white text-gray-500 text-sm px-2 py-1 font-bold border border-gray-50 rounded-md cursor-pointer hover:border-orange shadow-md"
                  onClick={decrementHandler}
                  disabled={counter === 0}
                >
                  -
                </button>

                {/* Quantity Display */}
                <p className="bg-white text-gray-500 text-sm px-3 md:px-6 py-1 font-bold border border-gray-50 rounded-md shadow-md">
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

              {/* Remove Button */}
              <img
                src={assets.cartCross}
                alt="Remove"
                className="w-10"
                onClick={() => updateCartQuantity(item._id, item.color, 0)}
              />
            </div>
          );
        })}
        <div className="">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
