import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { RiMenu5Line } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
const Navbar = () => {
  const [visible, setVisible] = useState(false); // set menu visibility

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex justify-between items-center py-4">
        {/* Logo - Link to the Home Page */}
        <Link to="/">
          <img
            src={assets.logo}
            alt="Basic Store Logo"
            className="w-24 sm:w-32"
          />
        </Link>

        {/* Main Nav links, Hidden on smaller Screen */}
        <div className="flex justify-between items-center lg:w-[650px]">
          <ul className="hidden lg:flex text-gray-700 text-sm gap-5">
            <NavLink to="/">HOME</NavLink>

            <NavLink to="/about">ABOUT</NavLink>

            <NavLink to="/shop">SHOP</NavLink>

            <NavLink to="/blogs">BLOGS</NavLink>

            <NavLink to="/contact">CONTACT</NavLink>
          </ul>

          {/* Icons: search, profile, cart, and menu for small screens */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-4">
            <img
              src={assets.search}
              alt="Search"
              className="w-4 sm:w-6 cursor-pointer"
            />

            {/* Profile Dropdown Menu */}
            <div className="group relative">
              <Link to="/login">
                <img
                  src={assets.profile}
                  alt="Profile Icon"
                  className="w-4 sm:w-6 rounded-full cursor-pointer"
                />
              </Link>
              <div className="dropdown-menu group-hover:block hidden absolute z-20 right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-saleBg bg-opacity-40 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <Link to="/cart" className="relative">
              <img src={assets.cart} alt="Cart Icon" className="w-4 sm:w-6" />
              <p className="absolute right-[-5px] bottom-[-5px] leading-4 w-4 items-center bg-orange text-white aspect-square text-[10px] text-center rounded-full">
                12
              </p>
            </Link>

            {/* Menu Icon */}
            <RiMenu5Line
              className="text-xl text-gray-700 cursor-pointer lg:hidden"
              onClick={() => setVisible(true)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`bg-saleBg bg-opacity-60 z-20 backdrop-blur-md absolute top-0 bottom-0 right-0 overflow-hidden lg:hidden transition-all ${
            visible ? "w-2/4" : "w-0"
          }`}
        >
          <div className="flex flex-col p-6 text-gray-700">
            <RiCloseLargeFill
              className="text-xl text-gray-700 cursor-pointer mb-10"
              onClick={() => setVisible(false)}
            />
            <NavLink
              to="/"
              className="text-sm sm:text-base py-2"
              onClick={() => setVisible(false)}
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm sm:text-base py-2"
              onClick={() => setVisible(false)}
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/shop"
              className="text-sm sm:text-base py-2"
              onClick={() => setVisible(false)}
            >
              SHOP
            </NavLink>

            <NavLink
              to="/blogs"
              className="text-sm sm:text-base py-2"
              onClick={() => setVisible(false)}
            >
              BLOGS
            </NavLink>

            <NavLink
              to="/contact"
              className="text-sm sm:text-base py-2"
              onClick={() => setVisible(false)}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
