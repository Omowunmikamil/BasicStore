import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      {/* Main layout of the footer section */}
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 my-10 mt-28 text-sm">
        {/* Logo and company description */}
        <div>
          <img src={assets.logo} className="w-28 mb-5" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600 md:line-clamp-4">
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
            <li className="hover:translate-x-2 ease-in-out duration-300">
              HOME
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              ABOUT
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              SHOP
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              BLOGS
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              CONTACT
            </li>
          </ul>
        </div>

        {/* Help & Info */}
        <div>
          <p className="text-xl font-medium mb-5">Help & Info</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {/* List of company-related links with hover animation */}
            <li className="hover:translate-x-2 ease-in-out duration-300">
              Track Your Order
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              Returns policies
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              SHOP
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              BLOGS
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              CONTACT
            </li>
          </ul>
        </div>

        {/* Contact information section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 text-sm">
            {/* Contact details with hover animation */}
            <li className="hover:translate-x-2 ease-in-out duration-300">
              +2348138777481
            </li>
            <li className="hover:translate-x-2 ease-in-out duration-300">
              balikiskamil@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom section */}
      <div>
        <hr /> {/* Divider line */}
        <p className="text-center text-gray-500 text-sm py-5">
          Copyright 2024&copy; forever.com - All Rights Reserved. Designed by
          Omowunmi.
        </p>
      </div>
    </div>
  );
}

export default Footer;
