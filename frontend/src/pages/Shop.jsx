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
  const [sortType, setSortType] = useState("default-sorting"); // Default sorting type ("default-sorting")
  const [filterSearch, setFilterSearch] = useState(""); // For storing the search query

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [from, setFrom] = useState(1); // For pagination
  const [previousState, setPreviousState] = useState(false); // For pagination
  const [nextState, setNextState] = useState(false); // For pagination
  const [to, setTo] = useState(9); // For pagination
  const [productsPerPage] = useState(9); // Number of products per page
  const lastIndex = currentPage * productsPerPage; // Last product index on the current page
  const firstIndex = lastIndex - productsPerPage; // First product index on the current page
  const records = filterProducts.slice(firstIndex, lastIndex); // Products to display on the current page
  const totalPages = Math.ceil(filterProducts.length / productsPerPage); // Total number of pages
  const numbers = [...Array(totalPages + 1).keys()].slice(1); // Array of page numbers

  // Pagination functions
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setFrom(from - productsPerPage);
      setTo(to - productsPerPage);
      setPreviousState(true);
      setNextState(false);
    }
  };

  // Generate page numbers
  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
      setTo(to + productsPerPage);
      setFrom(from + productsPerPage);
      setPreviousState(false);
      setNextState(true);
    }
  };

  // Change the current page
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
    setFrom(id * productsPerPage - productsPerPage + 1);
    setTo(id * productsPerPage);
  };

  const handleSearch = () => {
    let productsCopy = products.slice(); // Create a copy of the products array to apply filters on

    // Filter by search query if present
    if (filterSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(filterSearch.toLowerCase())
      );
    }

    setFilterProducts(productsCopy);
  };

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
        item.name.toLowerCase().includes(search.toLowerCase())
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
        sortSubCategory.includes(item.subCategory)
      );
    }

    // Filter by brand if selected
    if (sortBrand.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sortBrand.includes(item.brands)
      );
    }

    // Update the filtered products state
    setFilterProducts(productsCopy);
  };

  // Sort the filtered products based on the selected sort type (Low-High, High-Low, or Relevant)
  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice(); // Copy the filtered products array

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price)); // Sort by price low to high
        break;

      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price)); // Sort by price high to low
        break;

      default:
        applyFilters(); // Default sort by "relevant" (without changing the order)
        break;
    }
  };

  // useEffect hook to apply filters whenever categories, subcategories, or search query changes
  useEffect(() => {
    applyFilters();
  }, [sortCategory, sortSubCategory, sortBrand, search, showSearch, products]);

  // useEffect hook to sort the products whenever the sort type changes
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="">
      <HerderBanner h1={"Shop"} text1={"Home"} text2={"Shop"} href={"/shop"} />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-16">
        <div className="flex flex-col lg:flex-row gap-1 sm:gap-10 pt-10">
          {/* responsive */}
          <div className="lg:hidden min-w-60 md:min-w-52">
            <div className="w-full h-12 flex items-center gap-3 pl-2 rounded-lg bg-white border border-tesBorder shadow-md mb-6">
              <input
                value={filterSearch}
                onChange={(e) => setFilterSearch(e.target.value)} // Update the search query as the user types
                className="flex-1 text-sm w-full sm:flex-1 pl-2 outline-none bg-transparent"
                type="text"
                placeholder="Search"
              />
              {/* Search icon */}
              <button
                className="bg-text text-white text-sm px-6 py-2 rounded-lg h-12"
                onClick={handleSearch} // Show the search bar
              >
                <img
                  src={assets.searchWhite}
                  alt="Search Icon"
                  className="w-5"
                />
              </button>
            </div>

            {/* Filter by Brand */}
            <p
              onClick={() => setShowFilter(!showFilter)} // Toggle the filter visibility
              className="flex items-center text-xl my-2 gap-2 cursor-pointer"
            >
              FILTERS
              <img
                src={assets.dropdown} // Dropdown icon to show/hide filters
                className={`lg:hidden h-3 ${
                  showFilter ? "rotate-90" : " "
                } animate-ping`} // Rotate the icon when filters are visible
                alt="dropdown"
              />
            </p>
            {/* Filter by Category */}
            <div
              className={` py-3 mt-6 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Category</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Category checkboxes */}
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Phones"}
                    className="w-3"
                    onChange={toggleCategory} // Toggle category selection
                  />
                  Phones
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Accessories"}
                    className="w-3"
                    onChange={toggleCategory} // Toggle category selection
                  />
                  Accessories
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Laptop"}
                    className="w-3"
                    onChange={toggleCategory} // Toggle category selection
                  />
                  Laptop
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Watches"}
                    className="w-3"
                    onChange={toggleCategory} // Toggle category selection
                  />
                  Watches
                </p>
              </div>
            </div>

            {/* Filter by Sub Category */}
            <div
              className={`py-3 my-5 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Tags</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Subcategory checkboxes */}
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"White"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  White
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Cheap"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Cheap
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Mobile"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Mobile
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Modern"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Modern
                </p>
              </div>
            </div>

            {/* Filter by Brands */}
            <div
              className={`py-3 my-5 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Brands</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Subcategory checkboxes */}
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Apple"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Apple
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Samsung"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Samsung
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Green"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Green
                </p>
              </div>
            </div>
          </div>

          {/* left side */}
          <div className="flex-1">
            {/* Showing the number of products displayed in pegination */}
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-4">
              <p className="">
                Showing {from}-{to} of {products.length} results
              </p>

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
              {records.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>

            {/* Pagination */}
            <nav>
              <ul className="flex justify-center gap-4 mt-16">
                <li className="text-peg text-base md:text-lg font-bold hover:text-orange">
                  <a
                    href="#"
                    className={`${previousState ? "text-orange" : "text-peg"}`}
                    onClick={prevPage}
                  >
                    Prev
                  </a>
                </li>
                {numbers.map(function (num, index) {
                  return (
                    <li
                      key={index}
                      className={`page-item text-peg text-base md:text-lg font-bold `}
                    >
                      <a
                        href="#"
                        // className="page-link text-peg hover:text-orange active:text-orange"
                        className={`${
                          num === currentPage ? "text-orange" : "text-peg"
                        }`}
                        onClick={() => changeCurrentPage(num)}
                      >
                        {num}
                      </a>
                    </li>
                  );
                })}
                <li className="text-peg text-base md:text-lg font-bold page-item">
                  <a
                    href="#"
                    className={`${nextState ? "text-orange" : "text-peg"}`}
                    onClick={nextPage}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Side */}
          <div className="hidden lg:block min-w-60 md:min-w-52">
            <div className="w-full h-12 flex items-center gap-3 pl-2 rounded-lg bg-white border border-tesBorder shadow-md mb-6">
              <input
                value={filterSearch}
                onChange={(e) => setFilterSearch(e.target.value)} // Update the search query as the user types
                className="flex-1 text-sm w-full sm:flex-1 outline-none bg-transparent"
                type="text"
                placeholder="Search"
              />
              {/* Search icon */}
              <button
                className="bg-text text-white text-sm px-4 py-2 rounded-lg h-12"
                onClick={handleSearch} // Show the search bar
              >
                <img
                  src={assets.searchWhite}
                  alt="Search Icon"
                  className="w-4"
                />
              </button>
            </div>

            <p
              onClick={() => setShowFilter(!showFilter)} // Toggle the filter visibility
              className="flex items-center text-xl my-2 gap-2 cursor-pointer"
            >
              FILTERS
            </p>

            {/* Filter by Category */}
            <div
              className={` py-3 mt-6 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Category</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Category checkboxes */}
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Phones"}
                    className="w-3"
                    onChange={toggleCategory} // Toggle category selection
                  />
                  Phones
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Accessories"}
                    className="w-3"
                    onChange={toggleCategory} // Toggle category selection
                  />
                  Accessories
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Laptop"}
                    className="w-3"
                    onChange={toggleCategory} // Toggle category selection
                  />
                  Laptop
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Watches"}
                    className="w-3"
                    onChange={toggleCategory} // Toggle category selection
                  />
                  Watches
                </p>
              </div>
            </div>

            {/* Filter by Sub Category */}
            <div
              className={`py-3 my-5 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Tags</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Subcategory checkboxes */}
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"White"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  White
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Cheap"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Cheap
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Mobile"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Mobile
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Modern"}
                    className="w-3"
                    onChange={toggleSubCategory} // Toggle subcategory selection
                  />
                  Modern
                </p>
              </div>
            </div>

            {/* Filter by Brands */}
            <div
              className={`py-3 my-5 ${showFilter ? " " : "hidden"}  lg:block`}
            >
              <p className="mb-3 text-base text-text font-medium">Brands</p>
              <div className="flex flex-col gap-2 text-sm font-light text-text">
                {/* Subcategory checkboxes */}
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Apple"}
                    className="w-3"
                    onChange={toggleBrand} // Toggle subcategory selection
                  />
                  Apple
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Samsung"}
                    className="w-3"
                    onChange={toggleBrand} // Toggle subcategory selection
                  />
                  Samsung
                </p>
                <p className=" flex gap-2">
                  <input
                    type="checkbox"
                    value={"Green"}
                    className="w-3"
                    onChange={toggleBrand} // Toggle subcategory selection
                  />
                  Green
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
