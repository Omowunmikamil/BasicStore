import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="pt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-t">
      <h2 className="text-left">My Orders</h2>

      {/* Order Summary */}
      {/* Map through products and desplay ordered items */}
      <div className="">
        {products.slice(1, 4).map((items, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-700 border-t border-b py-4 gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={items.image[0]}
                alt={items.name}
                className="w-16 sm:w-20"
              />
              <div>
                <p className="sm:text-base font-medium">{items.name}</p>
                <div className="flex items-center text-base text-gray-700 gap-3 mt-2">
                  <p className="text-lg text-orange">
                    {currency} {items.price}
                  </p>
                  <p>Quantity 1</p>
                  <p className="">Color: black</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">30-12-2-24</span>
                </p>
              </div>
            </div>

            {/* Order Status */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
