import Marquee from "react-fast-marquee";

const SalesHeader = () => {
  return (
    <div className="bg-saleBg flex justify-center text-center">
      {/* Desktop view */}
      <div className="hidden lg:flex justify-between sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-2 w-full text-xs text-gray-700 font-light">
        <p className="">Need help? Call us 112233344455</p>
        <p className="">Summer sale discount off 60% off! Shop Now</p>
        <p className="">2-3 business days delivery & free returns</p>
      </div>

      {/* Mobile/Tablet view with Marquee pinned at the top */}
      <div className="bg-saleBg bg-opacity-60 backdrop-blur-md px-2 py-2 z-30 w-full lg:hidden">
        <Marquee speed={50} gradient={false}>
          <div className="flex items-center text-gray-700 font-light text-xs mr-6">
            <p className="whitespace-nowrap mx-6">
              Need help? Call us 112233344455
            </p>
            <p className="whitespace-nowrap mx-6">
              Summer sale discount off 60% off! Shop Now
            </p>
            <p className="whitespace-nowrap ml-6">
              2-3 business days delivery & free returns
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SalesHeader;
