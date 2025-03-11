import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div>
      <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
        <div className="bg-bestBg border border-bestBorder shadow-sm py-10 px-8 h-[200px] md:h-[380px] rounded-xl flex justify-center ">
          {/* Product image with over effect */}
          <img
            src={image[0]} // image[0] is the first image in the array
            alt={name}
            className=" hover:scale-110 transition ease-in-out"
          />
        </div>
        <div className="mt-2">
          <p className="pt-3 pb-1 text-sm font-semibold text-gray-700 text-center">
            {name}
          </p>
          <p className="text-orange text-center font-light text-sm">
            {currency}
            {price} {/* Display currency and price */}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
