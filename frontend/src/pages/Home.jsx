import Banners from "../components/Banners";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPost";
import OurPolicies from "../components/OurPolicies";
import ShopCategory from "../components/ShopCategory";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCategory />
      <BestSeller />
      <Banners />
      <Testimonials />
      <LatestPosts />
      <OurPolicies />
    </div>
  );
};

export default Home;
