import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 items-center">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <img src="/public/slack-icon.webp" alt="Slack" className="h-8" />
          <p className="font-extrabold">slack</p>
        </div>
        <ul className="flex gap-4 font-medium">
          <li className="flex items-center gap-1">
            Product
            <IoIosArrowDown />
          </li>
          <li>Enterprise</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="flex items-center gap-1">
        <BiSearch size={24} />
        <button className="px-4 py-2">Sign In</button>
        <div className="flex gap-3">
          <button className="px-4 py-2 border-2 border-[#622166] text-[#622166] font-medium rounded ml-2 uppercase">
            Talk to Sales
          </button>
          <button className="px-4 py-2 bg-[#622166] text-white rounded ml-2 uppercase">
            Try for Free
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
