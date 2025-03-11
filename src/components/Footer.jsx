import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Main layout of the footer section */}
      <div className="flex flex-col lg:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 my-10 mt-28 text-sm">
        {/* Logo and company description */}
        <div>
          <img
            src={assets.logo}
            className="w-28 mb-5 mt-2"
            alt="Company Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 text-xs md:text-sm">
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            Gravida massa volutpat aenean odio erat nullam fringilla.
          </p>
          <div className="flex gap-2 mt-5">
            <img
              src={assets.facebook}
              alt="Facebook"
              className="hover:rotate-180"
            />
            <img
              src={assets.instagram}
              alt="Instagram"
              className="hover:rotate-180"
            />
            <img
              src={assets.twitter}
              alt="Twitter"
              className="hover:rotate-180"
            />
            <img
              src={assets.linkedin}
              alt="Linkedin"
              className="hover:rotate-180"
            />
            <img
              src={assets.youtube}
              alt="Youtube"
              className="hover:rotate-180"
            />
          </div>
        </div>

        {/* Company links section */}
        <div>
          <p className="text-xl font-medium mb-5">Quick Links</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {/* List of company-related links with hover animation */}
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              <Link to="/blogs">BLOGS</Link>
            </li>
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* Help & Info */}
        <div>
          <p className="text-xl font-medium mb-5">Help & Info</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {/* List of company-related links with hover animation */}
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              TRACK YOUR ORDER
            </li>
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              RETURN POLICIES
            </li>
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              SHIPPING + DELIVERY
            </li>
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              CONTACT US
            </li>
            <li className="text-xs hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              FAQS
            </li>
          </ul>
        </div>

        {/* Contact information section */}
        <div>
          <p className="text-xl font-medium mb-5">Contact Us</p>
          <ul className="flex flex-col gap-1 text-gray-600 text-sm">
            {/* Contact details with hover animation */}
            <li className="hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              Do you have any queries or suggestions?
            </li>
            <li className="hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              balikiskamil@gmail.com
            </li>
            <li className="hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              If you need support? Just give us a call.
            </li>
            <li className="hover:text-orange hover:translate-x-2 ease-in-out duration-300">
              +2348138777481
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom section */}
      <div>
        <hr /> {/* Divider line */}
        <div className="flex flex-col lg:flex-row justify-e  lg:justify-between lg:items-center">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:w-[40%]">
            <div className="flex justify-center">
              <p className="flex text-center text-gray-500 text-sm py-2 mr-1 font-medium">
                We ship with:
              </p>
              <div className="flex items-center">
                <img src={assets.dhl} alt="DHL" className="" />
                <img src={assets.arcticons} alt="Arcticons" className="ml-2" />
              </div>
            </div>

            <div className="flex justify-center">
              <p className="text-gray-500 text-sm py-2 mr-1 font-medium">
                Payment options:
              </p>
              <div className="flex items-center">
                <img src={assets.visa} alt="Visa" className="w-8" />
                <img
                  src={assets.mastercard}
                  alt="Mastercard"
                  className="mx-2 w-8"
                />
                <img src={assets.paypal} alt="Paypal" className="w-8" />
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm py-5">
            &copy;Copyright 2024 BasicStore. Designed by Templates Jungle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
