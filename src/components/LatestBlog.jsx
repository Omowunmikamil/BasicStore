import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const LatestBlog = () => {
  const { blogPosts } = useContext(ShopContext);

  const [latestposts, setLatestposts] = useState([]);

  useEffect(() => {
    const topPosts = blogPosts.filter((item) => item.latestpost == true);
    setLatestposts(topPosts.slice(3, 6));
  }, [blogPosts]);

  return (
    <div className="block">
      <p className="mb-3 text-base text-text font-medium underline">
        Latest Posts
      </p>
      <div className="flex flex-col w-60 gap-5">
        {latestposts.map((item, index) => (
          <Link
            to={`/pages/${item.name}`}
            key={index}
            className="cursor-pointer flex flex-col items-center"
          >
            <div
              className="flex flex-row justify-between items-center gap-3"
              key={index}
            >
              <img src={item.image} alt="" className="rounded-xl size-16" />

              <p className="text-left text-sm text-gray-700 font-medium">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
