import React from "react";
import HerderBanner from "../components/HerderBanner";
import CartTotal from "../components/CartTotal";

const Checkout = () => {
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
        {/* Shipping Address */}
        <div className="mt-8">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
