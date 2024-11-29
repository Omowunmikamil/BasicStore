import { ourShopCategories } from "../assets/assets";

const ShopCategory = () => {
  return (
    <div className="my-10">
      <h2>Our Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-6 gap-y-6">
        {ourShopCategories && ourShopCategories.length > 0 ? (
          ourShopCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={category.image}
                alt={category.name}
                className="rounded-xl"
              />
              <h2 className="text-center text-sm sm:text-base font-semibold text-gray-700 mt-2">
                {category.name}
              </h2>
              <p className="text-xs md:text-sm font-extralight text-gray-500">
                {category.items}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No categories available</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
