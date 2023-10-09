import React from "react";
import { Navlinks } from "../constants";
import { Logo } from "../components/index";
import { Button } from "../components/index";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="p-6 w-screen h-max  flex justify-between items-center md:p-6 lg:px-24  ">
      <Logo />
      <ul className="w-auto flex space-x-5 max-md:hidden absolute left-[20%] font-semibold">
        <Dropdown />
      </ul>
      <div className="max-md:hidden flex space-x-10">
        <button>Login</button>
        <Button text="Sign Up" />
      </div>

      {/* .............hamburger........... */}
      <div onClick={handleClick} className="font-bold md:hidden z-10  ">
        {nav ? <FaTimes size={30} className="z-10" /> : <FaBars size={30} />}
      </div>

      {/* .....mobile menu open........... */}
      <div
        className={
          nav
            ? "bg-accent w-full m-auto absolute top-20 rounded-md shadow-light-red-text shadow-sm h-max z-10 left-0  ease-in duration-300"
            : "left-0 absolute opacity-0 ease-out duration-500"
        }
      >
        <ul className="md:hidden grid place-content-center items-center h-full w-full mt-12">
          {nav && 
          <li>
            <Dropdown />
          </li>
          }
          

          <div className="flex-col flex mt-10 border-t w-11/12 m-auto pt-8 ">
            <button className="text-headings-blue">Login</button>
            <Button text="Sign Up" id="mob-active" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
