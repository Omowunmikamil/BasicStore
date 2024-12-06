import { useContext, useEffect, useState } from "react";
import HerderBanner from "../components/HerderBanner";
import { ShopContext } from "../context/ShopContext";

const Shop = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false); // For toggling the visibility of filter options
  const [filterProducts, setFilterProducts] = useState([]); // For storing filtered products
  const [sortCategory, setSortCategory] = useState([]); // For storing selected categories
  const [sortSubCategory, setSortSubCategory] = useState([]); // For storing selected subcategories
  const [sortBrand, setSortBrand] = useState([]); // For storing selected brands
  const [sortType, setSortType] = useState("Default sorting"); // Default sorting type ("relevant")

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

    switch (sorttype) {
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
  }, [sorttype]);

  return (
    <div>
      <HerderBanner h1={"Shop"} text1={"Home"} text2={"Shop"} />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="">{}</div>
      </div>
    </div>
  );
};

export default Shop;
