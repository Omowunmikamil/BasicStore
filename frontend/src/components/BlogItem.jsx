import { Link } from "react-router-dom";

const BlogItem = ({ id, image, blogInfo, title }) => {
  return (
    <div>
      <Link to={`/pages/${id}`} className="">
        <div className="flex flex-col">
          {/* Product image with over effect */}
          <img
            src={image} // image[0] is the first image in the array
            alt={title}
            className="rounded-xl hover:scale-105 transition ease-in-out"
          />
        </div>
        <div className="mt-3">
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            {blogInfo}
          </p>
          <p className="text-sm sm:text-[20px] font-bold text-gray-700 text-center">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
