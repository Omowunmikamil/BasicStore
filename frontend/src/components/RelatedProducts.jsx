import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ subcategory }) => {
  const { products } = useContext(ShopContext);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const relatedProducts = products.filter(
        (
          product //product.category === category &&
        ) => product.subcategory === subcategory
      );

      setRelated(relatedProducts.slice(0, 4));
    }
  }, [products, subcategory]);

  return (
    <div className="mt-20">
      {/* Heading */}
      <div className="">
        <h2>Related Products</h2>
      </div>

      {/* Related Products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 gap-y-6">
        {related.length > 0 ? (
          // Map through related products and render each one
          related.map((item) => (
            <ProductItem
              key={item._id} // Using unique product id for the key
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          // Display a message if no related products are found
          <p className="text-center col-span-full">
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
