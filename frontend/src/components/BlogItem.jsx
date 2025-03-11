import { Link } from "react-router-dom";
import { format } from "date-fns";

const BlogItem = ({ name, image, blogInfo, date, title }) => {
  return (
    <div>
      <Link to={`/pages/${name}`} className="">
        <div className="flex flex-col">
          {/* Product image with over effect */}
          <img
            src={image} // image[0] is the first image in the array
            alt={title}
            className="rounded-xl hover:scale-105 transition ease-in-out h-[150px] md:h-[260px]"
          />
        </div>
        <div className="mt-3">
          <p className="text-xs sm:text-[18px] text-gray-400 text-center">
            {format(new Date(date), "MMM yy, yyyy")} - {blogInfo}
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
