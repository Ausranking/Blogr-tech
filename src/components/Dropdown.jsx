import { useState } from "react";
import { Navlinks } from "../constants";
import { PiCaretDownThin, PiCaretUpThin } from "react-icons/pi";
import { Link } from "react-router-dom";
const Dropdown = () => {
  return (
    <>
      {Navlinks.map((navlink) => (
        <nav key={navlink.label} className="">
          <div
            key={navlink.label}
            className="flex items-center justify-center flex-1 px-2"
          >
            <div className="dropdown dropdown-end dropdown-hover ">
              <label
                tabIndex={0}
                className="btn btn-ghost hover:bg-transparent rounded-btn text-gray-100"
              >
                <h4 className="capitalize">{navlink.label}</h4>
                <span>
                  <PiCaretDownThin />
                </span>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-10  p-2 shadow bg-gray-100 rounded-box w-52"
              >
                {navlink.Dropdowns.map((link, index) => (
                  <li key={index} className="text-desaturated-blue ">
                    <Link
                      to={link.item.linkto}
                      className="hover:text-hover-red hover:bg-transparent active:bg-transparent"
                    >
                      {link.item.tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      ))}
    </>
  );
};

export default Dropdown;
