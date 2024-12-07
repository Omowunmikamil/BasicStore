import { useContext, useEffect, useState } from "react";
import HerderBanner from "../components/HerderBanner";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/assets";

const Shop = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false); // For toggling the visibility of filter options
  const [filterProducts, setFilterProducts] = useState([]); // For storing filtered products
  const [sortCategory, setSortCategory] = useState([]); // For storing selected categories
  const [sortSubCategory, setSortSubCategory] = useState([]); // For storing selected subcategories
  const [sortBrand, setSortBrand] = useState([]); // For storing selected brands
  const [sortType, setSortType] = useState("default-sorting"); // Default sorting type ("relevant")

  // Handle toggling of categories
  const toggleCategory = (event) => {
    if (sortCategory.includes(event.target.value)) {
      setSortCategory((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSortCategory((prev) => [...prev, event.target.value]);
    }
  };

  // Handle toggling of subcategory
  const toggleSubCategory = (event) => {
    if (sortSubCategory.includes(event.target.value)) {
      setSortSubCategory((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSortSubCategory((prev) => [...prev, event.target.value]);
    }
  };

  // Handle toggling of brands
  const toggleBrand = (event) => {
    if (sortBrand.includes(event.target.value)) {
      setSortBrand((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSortBrand((prev) => [...prev, event.target.value]);
    }
  };

  // Apply the filters based on selected categories, subcategories, brands and search query
  const applyFilters = () => {
    let productsCopy = products.slice(); // Create a copy of the products array to apply filters on

    // Filter by search query if present
    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        sortCategory.includes(item.category)
      );
    }

    // Filter by category if selected
    if (sortCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sortCategory.includes(item.category)
      );
    }

    // Filter by subcategory if selected
    if (sortSubCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sortSubCategory.includes(item.subcategory)
      );
    }

    // Filter by brand if selected
    if (sortBrand.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sortBrand.includes(item.brand)
      );
    }

    setFilterProducts(productsCopy); // update filter products list with filtered products
  };

  // Sort the products based on the selected sorting type
  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice(); // filter products by category name

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price < b.price));
        break;

      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price > b.price));
        break;

      default:
        applyFilters();
        break;
    }
  };

  // Run filters and sorting when any filter or sorting option changes
  useEffect(() => {
    applyFilters();
  }, [sortCategory, sortSubCategory, sortBrand, search, showSearch, products]); // sort by category and category name

  // Run sorting when the sorting type changes
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="">
      <HerderBanner h1={"Shop"} text1={"Home"} text2={"Shop"} />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-16">
        <div className="flex flex-col lg:flex-row gap-1 sm:gap-10 pt-10">
          {/* left side */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500 mb-4">
              <p className="">Showing 1-9 of 55 results</p>

              {/* Sort Product By */}
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="outline-none"
              >
                <option value="default-sorting" className="">
                  Sort by: Default sorting
                </option>
                <option value="low-high" className="">
                  Sort by: Low to High
                </option>
                <option value="high-low" className="">
                  Sort by: High to Low
                </option>
              </select>
            </div>

            {/* Displaying Filtered and Sorted Products */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
              {filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="min-w-60 md:min-w-52">
            <form className="w-full h-12 flex items-center gap-3 pl-2 rounded-lg bg-white border border-tesBorder shadow-md mb-6">
              <input
                type="email"
                name="email"
                placeholder="Search"
                required
                className="w-full sm:flex-1 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="bg-text text-white text-sm px-4 py-2 rounded-lg h-12"
              >
                <img
                  src={assets.searchWhite}
                  alt="Search Icon"
                  className="w-4"
                />
              </button>
            </form>

            <p
              onClick={() => setShowFilter(!showFilter)} // Toggle the filter visibility
              className="flex items-center text-xl my-2 gap-2 cursor-pointer"
            >
              FILTERS
              <img
                src={assets.dropdown_icon} // Dropdown icon to show/hide filters
                className={`lg:hidden h-3 ${showFilter ? "rotate-90" : " "}`} // Rotate the icon when filters are visible
                alt="dropdown"
              />
            </p>

            {/* Filter by Category */}
            <div
              className={`py-3 mt-6 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Category</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Category checkboxes */}
                <p
                  onClick={toggleCategory}
                  value={"/"}
                  className="cursor-pointer"
                >
                  All
                </p>
                <p
                  onClick={toggleCategory}
                  value={"Phones"}
                  className="cursor-pointer"
                >
                  Phones
                </p>
                <p
                  onClick={toggleCategory}
                  value={"Accessories"}
                  className="cursor-pointer"
                >
                  Accessories
                </p>
                <p
                  onClick={toggleCategory}
                  value={"Laptop"}
                  className="cursor-pointer"
                >
                  Laptop
                </p>
                <p
                  onClick={toggleCategory}
                  value={"Watches"}
                  className="cursor-pointer"
                >
                  Watches
                </p>
              </div>
            </div>

            {/* Filter by Sub Category */}
            <div
              className={`py-3 mt-6 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Tags</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Category checkboxes */}
                <p
                  onClick={toggleSubCategory}
                  className="cursor-pointer"
                  value={"Watches"}
                >
                  White
                </p>
                <p
                  onClick={toggleSubCategory}
                  className="cursor-pointer"
                  value={"Watches"}
                >
                  Cheap
                </p>
                <p
                  onClick={toggleSubCategory}
                  className="cursor-pointer"
                  value={"Watches"}
                >
                  Mobile
                </p>
                <p
                  onClick={toggleSubCategory}
                  className="cursor-pointer"
                  value={"Watches"}
                >
                  Modern
                </p>
              </div>
            </div>

            {/* Filter by Brand */}
            <div
              className={`py-3 mt-6 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Brands</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Category checkboxes */}
                <p
                  onClick={toggleBrand}
                  className="cursor-pointer"
                  value={"Watches"}
                >
                  All
                </p>
                <p
                  onClick={toggleBrand}
                  className="cursor-pointer"
                  value={"Watches"}
                >
                  Phones
                </p>
                <p
                  onClick={toggleBrand}
                  className="cursor-pointer"
                  value={"Watches"}
                >
                  Tables
                </p>
                <p
                  onClick={toggleBrand}
                  className="cursor-pointer"
                  value={"Watches"}
                >
                  Watches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
