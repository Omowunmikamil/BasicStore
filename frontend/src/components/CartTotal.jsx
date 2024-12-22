import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Button from "./Button";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount, navigate } =
    useContext(ShopContext);
  return (
    <div className="mt-12">
      <h2 className="text-start">Cart Totals</h2>

      {/* Cart Summary Section */}
      <div className="flex flex-col text-sm gap-2 mt-2">
        <div className="border-t border-b text-text py-2 ">
          <div className="w-3/5 sm:w-2/6 flex justify-between">
            <p className="">Subtotal</p>
            <p className="text-orange">
              {currency} {getCartAmount()}.00
            </p>
          </div>
        </div>
        {/* Displaying shipping fee */}
        <div className="border-b text-text pb-2">
          <div className="w-3/5 sm:w-2/6 flex justify-between">
            <p>Shipping Fee</p>
            <p className="text-orange">
              {currency} {deliveryFee}.00
            </p>
          </div>
        </div>
        {/* Displaying total amount */}
        <div className="border-b text-text pb-2 ">
          <div className="w-3/5 sm:w-2/6 flex justify-between">
            <p className="">Total</p>
            <p className="text-orange">
              {currency}
              {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-6">
        <Button text={"UPDATE CART"} onClick={() => navigate("/shop")} />
        <Button text={"CONTINUE SHOPPING"} onClick={() => navigate("/shop")} />
        <Button
          text={"PROCEED TO CHECKOUT"}
          onClick={() => navigate("/place-order")}
        />
      </div>
    </div>
  );
};

export default CartTotal;
