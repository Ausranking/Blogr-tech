import React from "react";
import { Navlinks } from "../constants";
import { Logo } from "../components/index";
import { Button } from "../components/index";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiCaretDownThin } from "react-icons/pi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className=" absolute top-0 p-6 w-screen h-max  flex justify-between items-center md:p-6 lg:px-24 ">
      <Logo />
      <ul className="w-auto flex space-x-5 max-md:hidden absolute left-[20%] font-semibold">
        {Navlinks.map((item, index) => (
          <li
            key={index}
            className="  gap-1 flex justify-between items-center"
            onClick={toggleDropdown}
          >
            {item.label}
            <div onClick={toggleDropdown}>
              <PiCaretDownThin />
            </div>
            {/* {isOpen && (
              <div className="absolute top-10 min-w-[25%] left-0 mt-2 bg-transparent border rounded-md shadow-md">
                <ul>
                  {item.Dropdowns.map((dropdown) => (
                    <li>{dropdown}</li>
                  ))}
                </ul>
              </div>
            )} */}
          </li>
        ))}
      </ul>
      <div className="max-md:hidden flex space-x-10">
        <button>Login</button>
        <Button text="Sign Up" />
      </div>

      {/* .............hamburger........... */}
      <div onClick={handleClick} className="font-bold md:hidden  ">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* .....mobile menu open........... */}
      <div
        onClick={handleClick}
        className={
          nav
            ? "bg-white w-full left-0 m-auto absolute top-20 rounded-md shadow-light-red-text shadow-sm h-max z-10  ease-in duration-300"
            : "left-0 absolute opacity-0 ease-out duration-500"
        }
      >
        <ul className="md:hidden">
          {Navlinks.map((item, index) => (
            <li
              className="text-headings-blue font-semibold py-2 text-center
          mt-5"
              key={index}
            >
              {item.label} ^{" "}
            </li>

            // ...dropdown....
          ))}
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
