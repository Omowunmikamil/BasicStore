import { Routes, Route } from "react-router-dom";
import SalesHearder from "./components/SalesHearder";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsTeller from "./components/NewsTeller";
import InstaShop from "./components/InstaShop";
import SearchBar from "./components/SearchBar";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <SalesHearder />
      <div className="">
        <Navbar />
        <SearchBar />
        {/* Main Content */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pages/:blogName" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/place-order" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <NewsTeller />
        <InstaShop />
        <Footer />
      </div>
    </div>
  );
};

export default App;
