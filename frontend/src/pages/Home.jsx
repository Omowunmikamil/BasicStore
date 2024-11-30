import Banners from "../components/Banners";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import ShopCategory from "../components/ShopCategory";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCategory />
      <BestSeller />
      <Banners />
    </div>
  );
};

export default Home;
