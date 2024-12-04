import { assets } from "../assets/assets";

const OurPolicies = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-20">
      {/* Free Delivery */}
      <div className="flex flex-col items-center bg-white border border-tesBorder rounded-xl shadow-md py-6 px-6">
        <img src={assets.policyCart} alt="Policy Cart" className="" />
        <p className="text-sm text-gray-700 font-bold mt-3">Free Delivery</p>
        <p className="text-center text-sm text-gray-400 font-light mt-1">
          Consectetur adipi elit lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* Quality Guarantee */}
      <div className="flex flex-col items-center bg-white border border-tesBorder rounded-xl shadow-md py-6 px-6">
        <img src={assets.cup} alt="Policy Cart" className="" />
        <p className="text-sm text-gray-700 font-bold mt-3">
          Quality Guarantee
        </p>
        <p className="text-center text-sm text-gray-400 font-light mt-1">
          Dolor sit amet orem ipsu mcons ectetur adipi elit.
        </p>
      </div>

      {/* Daily Offers */}
      <div className="flex flex-col items-center bg-white border border-tesBorder rounded-xl shadow-md py-6 px-6">
        <img src={assets.tag} alt="Policy Cart" className="" />
        <p className="text-sm text-gray-700 font-bold mt-3">Daily Offers</p>
        <p className="text-center text-sm text-gray-400 font-light mt-1">
          Amet consectetur adipi elit loreme ipsum dolor sit.
        </p>
      </div>

      {/* 100% Secure Payment */}
      <div className="flex flex-col items-center bg-white border border-tesBorder rounded-xl shadow-md py-6 px-6">
        <img src={assets.chat} alt="Policy Cart" className="" />
        <p className="text-sm text-gray-700 font-bold mt-3">
          100% Secure Payment
        </p>
        <p className="text-center text-sm text-gray-400 font-light mt-1">
          Rem Lopsum dolor sit amet, consectetur adipi elit.
        </p>
      </div>
    </div>
  );
};

export default OurPolicies;
