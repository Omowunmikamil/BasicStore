import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import HerderBanner from "../components/HerderBanner";

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

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
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
          <p className="font-medium text-sm text-text">Product</p>
          <p className="font-medium text-sm text-text">Quantity</p>
          <p className="font-medium text-sm text-text">Subtotal</p>
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
              {/* Product image and info */}
              <div className="flex items-start gap-6">
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-16 sm:w-20"
                />
              </div>
              <div className="">
                <p className="text-sm sm:text-lg font-medium">
                  {productData.name}
                </p>
                <div className="flex items-center gap-5 mt-2">
                  <p className="">
                    {currency}
                    {productData.price}
                  </p>
                  <p className=""></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
