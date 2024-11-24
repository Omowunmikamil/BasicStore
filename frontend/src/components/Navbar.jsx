import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      {/* Logo - Link to the Home Page */}
      <Link to="/">
        <img src={assets.logo} alt="Basic Store Logo" className="w-28" />
      </Link>

      {/* Main Nav links, Hidden on smaller Screen */}
      <ul className="hidden sm:flex text-gray-700 text-sm gap-5">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:text-orange font-normal text-sm"
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:text-orange font-normal text-sm"
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/shop"
          className="flex flex-col items-center gap-1 hover:text-orange font-normal text-sm"
        >
          SHOP
        </NavLink>

        <NavLink
          to="/blogs"
          className="flex flex-col items-center gap-1 hover:text-orange font-normal text-sm"
        >
          BLOGS
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-orange font-normal text-sm"
        >
          CONTACT
        </NavLink>
      </ul>

      {/* Icons: search, profile, cart, and menu for small screens */}
      <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
        <img src={assets.search} alt="Search" className="w-" />

        {/* Profile Dropdown Menu */}
        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile}
              alt="Profile Icon"
              className="w-5 rounded-full cursor-pointer"
            />
          </Link>
          <div className="dropdown-menu group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <Link to="/cart" className="relative">
          <img src={assets.cart} alt="Cart Icon" className="w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] leading-4 w-4 items-center bg-orange text-white aspect-square text-[10px] text-center rounded-full">
            12
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
