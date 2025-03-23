import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between p-4 items-center">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex items-center gap-1">
          <img src="/slack-icon.png" alt="Slack" className="h-8" />
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
        <button className="px-1 md:px-4 md:py-2 text-xs md:text-base whitespace-nowrap">
          Sign In
        </button>
        <div className="flex gap-3">
          <button className="px-2 md:px-4 md:py-2 border-2 border-[#622166] text-[#622166] font-medium rounded ml-2 uppercase text-xs md:text-base">
            Talk to Sales
          </button>
          <button className="px-2 md:px-4 md:py-2 bg-[#622166] text-white rounded ml-2 uppercase text-xs md:text-base">
            Try for Free
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
