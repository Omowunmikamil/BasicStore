import React from "react";
import HerderBanner from "../components/HerderBanner";

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
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {/* Billing Address */}
          <div className="flex flex-col w-full sm:max-w-[650px] gap-6 sm:gap-8">
            <h2 className="text-start my-0">Billing Address</h2>
            {/* Form for entering billing address */}
            <div className="text-text">
              <label htmlFor="fname">Firstname*</label>
              <input
                type="text"
                name="fname"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
              />
            </div>
            <div className="text-text">
              <label htmlFor="lname">Lastname*</label>
              <input
                type="text"
                name="lname"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
              />
            </div>
            <div className="text-text">
              <label htmlFor="companyname">Company name (optional)</label>
              <input
                type="text"
                name="companyname"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
              />
            </div>
            <div className="text-text">
              <label htmlFor="conreg">Country / Region *</label>
              <input
                type="text"
                name="conreg"
                placeholder="United States (US"
                className="w-full h-12 border border-checkBord bg-white rounded-lg shadow-md outline-none py-2 px-3 mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
