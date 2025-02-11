import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import Button from "./Button";

const LatestPosts = () => {
  const { navigate, blogPosts } = useContext(ShopContext);

  const [latestposts, setLatestposts] = useState([]);

  useEffect(() => {
    const topPosts = blogPosts.filter((item) => item.latestpost === true);
    setLatestposts(topPosts.slice(0, 3));
  }, [blogPosts]);

  const openBlogPosts = () => {
    navigate("/blogs");
  };

  return (
    <div className="mt-20">
      <h2>Latest Posts</h2>
      <div className="flex flex-col md:flex-row gap-5">
        {latestposts.map((item, index) => (
          <Link
            to={`/pages/${item.name}`}
            key={index}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="" key={index}>
              <img src={item.image} alt="" className="rounded-xl" />
              <p className="text-center text-xs text-gray-400 font-light mt-2 mb-1">
                {item.blogInfo}
              </p>
              <p className="text-center text-sm text-gray-700 font-bold">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <Button text={"READ BLOGS"} onClick={openBlogPosts} />
      </div>
    </div>
  );
};

export default LatestPosts;
