import React from "react";
import HerderBanner from "../components/HerderBanner";

const Blogs = () => {
  return (
    <div>
      <HerderBanner h1={"Blogs"} text1={"Home"} text2={"Blogs"} />
      <div className="mt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col md:flex-row justify-between"></div>
      </div>
    </div>
  );
};

export default Blogs;
