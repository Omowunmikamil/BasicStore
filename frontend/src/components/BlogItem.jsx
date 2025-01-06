import { Link } from "react-router-dom";
import { format } from "date-fns";

const BlogItem = ({ id, image, blogInfo, date, title }) => {
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
          <p className="text-xs sm:text-[18px] text-gray-400 text-center">
            {format(new Date(date), "yyyy-MM-dd")} - {blogInfo}
          </p>
          <p className="text-sm sm:text-[20px] font-semibold text-gray-700 text-center mt-1">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
