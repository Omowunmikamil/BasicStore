import { assets } from "../assets/assets";
import HerderBanner from "../components/HerderBanner";
import OurPolicies from "../components/OurPolicies";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const About = () => {
  const { navigate } = useContext(ShopContext);

  const handlesubmit = () => {
    navigate("/shop");
  };

  return (
    <div className="">
      <HerderBanner h1={"About Us"} text1={"Home "} text2={" About Us"} />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <OurPolicies />
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-[49%]">
              <img src={assets.aboutImg} alt="" className="w-full rounded-xl" />
            </div>
            <div className="w-full lg:w-[46%]">
              <h2 className="text-left mb-2">Best Digital Store BasicStore</h2>
              <p className="text-gray-500 text-[18px]">
                Risus augue curabitur diam senectus congue velit et. Sed vitae
                metus nibh sit era. Nulla adipiscing pharetra pellentesque
                maecenas odio eros at. Et libero vulputate amet duis erat
                volutpat vitae eget. Sed vitae metus nibh sit era. Nulla
                adipiscing pharetra eros at.
              </p>
              <p className="text-gray-500 text-[18px]">
                Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et
                libero vulputate amet duis erat volutpat vitae eget. Quam libero
                etiam et in ac at quis. Risus augue curabitur diam senectus
                congue velit et.
              </p>
              <Button
                text={"GO TO SHOP"}
                className={"mt-8"}
                onClick={handlesubmit}
              />
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
