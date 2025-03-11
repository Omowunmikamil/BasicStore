import { instaItems } from "../assets/assets";

const InstaShop = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-20">
      <h2>Shop Our Insta</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-5 gap-6 gap-y-6">
        {instaItems && instaItems.length > 0 ? (
          instaItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img src={item.image} alt={"Insta Item"} className="rounded-xl" />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No categories available</p>
        )}
      </div>
    </div>
  );
};

export default InstaShop;
