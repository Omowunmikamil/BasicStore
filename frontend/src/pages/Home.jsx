import Banners from "../components/Banners";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
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
    </div>
  );
};

export default Home;
