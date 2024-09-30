import React from "react";
import logo from "../assets/Sadaf_logo-removebg-preview.png";

function Navbar() {
  return (
    <nav className="bg-[#E9E9FF] rounded-b-xl px-3 justify-center flex md:justify-between sticky">
      <div className="flex font-bold my-auto cursor-pointer">
        <img src={logo} alt="Logo" className="w-[84px] md:w-14" />
        <span className="my-auto text-xl md:text-base">Sadaf Al Arabia</span>
      </div>
      <ul className="hidden md:flex space-x-3 my-auto ">
        <li className="hover:font-bold cursor-pointer group transition duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-blue-900 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About
          </span>
        </li>
        <li className="hover:font-bold cursor-pointer group transition duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-blue-900 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Photos
          </span>
        </li>
        <li className="hover:font-bold cursor-pointer group transition duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-blue-900 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact Us
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
