import { useContext, useEffect, useState } from "react";
import HerderBanner from "../components/HerderBanner";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import BlogItem from "../components/BlogItem";

const Blogs = () => {
  const { blogPosts, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false); // For toggling the visibility of filter options
  const [filterPosts, setFilterPosts] = useState([]); // For storing filtered blog posts
  const [sortCategory, setSortCategory] = useState([]); // For storing selected categories
  const [sortSubCategory, setSortSubCategory] = useState([]); // For storing selected subcategories
  const [sortType, setSortType] = useState("latest"); // Default sorting type ("latest")
  const [filterSearch, setFilterSearch] = useState(""); // For storing the search query

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [from, setFrom] = useState(1); // For pagination
  const [previousState, setPreviousState] = useState(false); // For pagination
  const [nextState, setNextState] = useState(false); // For pagination
  const [to, setTo] = useState(9); // For pagination
  const [blogPostsPerPage] = useState(9); // Number of blogPosts per page
  const lastIndex = currentPage * blogPostsPerPage; // Last product index on the current page
  const firstIndex = lastIndex - blogPostsPerPage; // First product index on the current page
  const records = filterPosts.slice(firstIndex, lastIndex); // blogPosts to display on the current page
  const totalPages = Math.ceil(filterPosts.length / blogPostsPerPage); // Total number of pages
  const numbers = [...Array(totalPages + 1).keys()].slice(1); // Array of page numbers

  // Pagination functions
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setFrom(from - blogPostsPerPage);
      setTo(to - blogPostsPerPage);
      setPreviousState(true);
      setNextState(false);
    }
  };

  // Generate page numbers
  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
      setTo(to + blogPostsPerPage);
      setFrom(from + blogPostsPerPage);
      setPreviousState(false);
      setNextState(true);
    }
  };

  // Change the current page
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
    setFrom(id * blogPostsPerPage - blogPostsPerPage + 1);
    setTo(id * blogPostsPerPage);
  };

  const handleSearch = () => {
    let blogPostsCopy = blogPosts.slice(); // Create a copy of the blogPosts array to apply filters on

    // Filter by search query if present
    if (filterSearch) {
      blogPostsCopy = blogPostsCopy.filter((item) =>
        item.name.toLowerCase().includes(filterSearch.toLowerCase())
      );
    }

    setFilterPosts(blogPostsCopy);
  };

  // Handle toggling of cateblogPostsgories
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

  // Apply the filters based on selected categories, subcategories and search query
  const applyFilters = () => {
    let blogPostsCopy = blogPosts.slice(); // Create a copy of the blogPosts array to apply filters on

    // Filter by search query if present
    if (search && showSearch) {
      blogPostsCopy = blogPostsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category if selected
    if (sortCategory.length > 0) {
      blogPostsCopy = blogPostsCopy.filter((item) =>
        sortCategory.includes(item.category)
      );
    }

    // Filter by subcategory if selected
    if (sortSubCategory.length > 0) {
      blogPostsCopy = blogPostsCopy.filter((item) =>
        sortSubCategory.includes(item.subCategory)
      );
    }

    // Update the filtered blogPosts state
    setFilterPosts(blogPostsCopy);
  };

  // Sort the filtered blogPosts based on the selected sort type (Low-High, High-Low, or Relevant)
  const sortPosts = () => {
    let filterPostsCopy = filterPosts.slice(); // Copy the filtered blogPosts array

    switch (sortType) {
      case "most-recent":
        setFilterPosts(filterPostsCopy.sort((a, b) => a.price - b.price)); // Sort by price low to high
        break;

      case "older":
        setFilterPosts(filterPostsCopy.sort((a, b) => b.price - a.price)); // Sort by price high to low
        break;

      default:
        applyFilters(); // Default sort by "relevant" (without changing the order)
        break;
    }
  };

  // useEffect hook to apply filters whenever categories, subcategories, or search query changes
  useEffect(() => {
    applyFilters();
  }, [sortCategory, sortSubCategory, search, showSearch, blogPosts]);

  // useEffect hook to sort the blogPosts whenever the sort type changes
  useEffect(() => {
    sortPosts();
  }, [sortType]);

  return (
    <div>
      <HerderBanner h1={"Blogs"} text1={"Home"} text2={"Blogs"} />
      <div className="mt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
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
          </div>

          {/* left side */}
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
          </div>

          {/* Right Side */}
          <div className="flex-1">
            {/* Showing the number of products displayed in pegination */}
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-4">
              <p className="">
                Showing {from}-{to} of {blogPosts.length} results
              </p>

              {/* Sort Product By */}
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="outline-none"
              >
                <option value="latest" className="">
                  Latest
                </option>
                <option value="most-recent" className="">
                  Most Recent
                </option>
                <option value="older" className="">
                  Older
                </option>
              </select>
            </div>

            {/* Displaying Filtered and Sorted Products */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6">
              {records.map((item, index) => (
                <BlogItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  blogInfo={item.blogInfo}
                  title={item.title}
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
        </div>
      </div>
    </div>
  );
};

export default Blogs;
