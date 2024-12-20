import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Button from "./Button";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="mt-12">
      <h2 className="text-start">Cart Totals</h2>

      {/* Cart Summary Section */}
      <div className="flex flex-col text-sm gap-2 mt-2">
        <div className="flex justify-normal border-t border-b text-text gap-32 sm:gap-40 py-2 ">
          <p className="">Subtotal</p>
          <p className="text-orange">
            {currency} {getCartAmount}.00
          </p>
        </div>
        <div className="flex justify-normal border-b text-text gap-32 sm:gap-[11.5rem] pb-2 ">
          <p className="">Total</p>
          <p className="text-orange">
            {currency} {getCartAmount}.00
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <Button text={"UPDATE CART"} />
        <Button text={"CONTINUE SHOPPING"} />
        <Button text={"PROCEED TO CHECKOUT"} />
      </div>
    </div>
  );
};

export default CartTotal;
