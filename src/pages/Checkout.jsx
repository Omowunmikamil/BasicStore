import { useContext, useState } from "react";
import HerderBanner from "../components/HerderBanner";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import Button from "../components/Button";

const Checkout = () => {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("dbt");

  return (
    <div>
      <HerderBanner
        h1={"Place Order"}
        text1={"Home"}
        text2={"Checkout"}
        href={"/place-order"}
      />
      {/* Checkout Form */}
      <div className="mt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* Billing Address */}
          <div className="flex flex-col w-full sm:max-w-[50%] gap-6">
            <h2 className="text-start my-3">Billing Address</h2>

            {/* Form for entering billing address */}
            <div className="text-text">
              <label htmlFor="fname" className="text-gray-500">
                Firstname *
              </label>
              <input
                type="text"
                name="fname"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="lname" className="text-gray-500">
                Lastname *
              </label>
              <input
                type="text"
                name="lname"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="companyname" className="text-gray-500">
                Company name (optional)
              </label>
              <input
                type="text"
                name="companyname"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="conreg" className="text-gray-500">
                Country / Region *
              </label>
              <input
                type="text"
                name="conreg"
                placeholder="United States (US)"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="streetAdd" className="text-gray-500">
                Street address *
              </label>
              <input
                type="text"
                name="streetAdd"
                placeholder="House number and street name"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
              <input
                type="text"
                name="streetAdd"
                placeholder="Apartments, suite, etc."
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="townCity" className="text-gray-500">
                Town / City *
              </label>
              <input
                type="text"
                name="townCity"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="townCity" className="text-gray-500">
                State *
              </label>
              <input
                type="text"
                name="townCity"
                placeholder="Florida"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="townCity" className="text-gray-500">
                Zip Code *
              </label>
              <input
                type="number"
                name="townCity"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="townCity" className="text-gray-500">
                Phone *
              </label>
              <input
                type="tel"
                name="townCity"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
            <div className="text-text">
              <label htmlFor="townCity" className="text-gray-500">
                Email address *
              </label>
              <input
                type="email"
                name="townCity"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
                required
              />
            </div>
          </div>
          {/* BAdditional Info */}
          <div className="flex flex-col w-full sm:max-w-[50%] gap-6">
            <h2 className="text-start my-3">Additional Info</h2>
            <div className="text-text">
              <label htmlFor="orderNotes" className="text-gray-500">
                Order Notes (optional)
              </label>
              <textarea
                name="orderNotes"
                rows="1"
                placeholder="Notes about your order. Like special notes for delivery."
                className="w-full border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8">
          <CartTotal />
          <div className="flex flex-col gap-3 mt-6">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setMethod("dbt")}
            >
              <p
                className={`size-3.5 border rounded-full cursor-pointer ${
                  method === "dbt" ? "bg-blue-400" : ""
                }`}
              ></p>
              <p className="text-lg text-gray-600 font-normal">
                Direct Bank Transfer
              </p>
            </div>

            {/* Check payments */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setMethod("checkP")}
            >
              <p
                className={`size-3.5 border rounded-full cursor-pointer ${
                  method === "checkP" ? "bg-blue-400" : ""
                }`}
              ></p>
              <p className="text-lg text-gray-600 font-normal">
                Check payments
              </p>
            </div>

            {/* Cash on Delivery */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setMethod("cod")}
            >
              <p
                className={`size-3.5 border rounded-full cursor-pointer ${
                  method === "cod" ? "bg-blue-400" : ""
                }`}
              ></p>
              <p className="text-lg text-gray-600 font-normal">
                Cash on Delivery
              </p>
            </div>

            {/* PayPal */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setMethod("paypal")}
            >
              <p
                className={`size-3.5 border rounded-full cursor-pointer ${
                  method === "paypal" ? "bg-blue-400" : ""
                }`}
              ></p>
              <p className="text-lg text-gray-600 font-normal">PayPal</p>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <Button
          text={"PLACE AN ORDER"}
          onClick={() => navigate("/order")}
          className={"mt-6"}
        />
      </div>
    </div>
  );
};

export default Checkout;
