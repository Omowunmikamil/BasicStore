import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import HerderBanner from "../components/HerderBanner";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, cartItems, currency, updateCartQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  // Update cartData based on cartItems
  useEffect(() => {
    const tempCartData = [];

    for (const productId in cartItems) {
      for (const color in cartItems[productId]) {
        if (cartItems[productId][color]) {
          tempCartData.push({
            _id: productId,
            color,
            quantity: cartItems[productId][color],
          });
        }
      }
    }

    setCartData(tempCartData);
  }, [cartItems]);

  // Handle increment
  const incrementHandler = (productId, color, currentQuantity) => {
    updateCartQuantity(productId, color, currentQuantity + 1);
  };

  // Handle decrement
  const decrementHandler = (productId, color, currentQuantity) => {
    if (currentQuantity > 0) {
      updateCartQuantity(productId, color, currentQuantity - 1);
    }
  };

  return (
    <div className="">
      <HerderBanner h1={"Cart"} text1={"Home"} text2={"Cart"} href={"/cart"} />

      <div className="mt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {/* Header */}
        <div className="grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 mb-5">
          <p className="font-medium text-sm text-text">Product</p>
          <p className="font-medium text-sm text-text">Quantity</p>
          <p className="font-medium text-sm text-text">Remove</p>
        </div>

        {/* Cart Items */}
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null; // Skip if productData is missing

          return (
            <div
              key={index}
              className="text-gray-700 border-t border-b py-4 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Product Info */}
              <div className="flex items-start gap-4 md:gap-6">
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-16 sm:w-20 bg-bestBg"
                />
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

              {/* Quantity Controls */}
              <div className="flex gap-1 items-center my-auto">
                {/* Decrement Button */}
                <button
                  className="bg-white text-gray-500 text-sm px-2 py-1 font-bold border border-gray-50 rounded-md cursor-pointer hover:border-orange shadow-md"
                  onClick={() =>
                    decrementHandler(item._id, item.color, item.quantity)
                  }
                  disabled={item.quantity === 0}
                >
                  -
                </button>

                {/* Quantity Display */}
                <p className="bg-white text-gray-500 text-sm px-3 md:px-6 py-1 font-bold border border-gray-50 rounded-md shadow-md">
                  {item.quantity}
                </p>

                {/* Increment Button */}
                <button
                  className="bg-white text-gray-500 text-sm px-2 py-1 font-bold border border-gray-50 rounded-md cursor-pointer hover:border-orange shadow-md"
                  onClick={() =>
                    incrementHandler(item._id, item.color, item.quantity)
                  }
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <img
                src={assets.cartCross}
                alt="Remove"
                className="w-10 cursor-pointer"
                onClick={() => updateCartQuantity(item._id, item.color, 0)}
              />
            </div>
          );
        })}

        {/* Cart Total */}
        <div className="">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
