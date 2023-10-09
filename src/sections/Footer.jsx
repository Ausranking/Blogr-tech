import { Link } from "react-router-dom";
import { Logo } from "../components";
import { Navlinks } from "../constants";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className=" grid grid-flow-row p-2 gap-y-4 ">
        <Logo />
        <p className="text-left ">
          <span className="">Blogr</span> delectus, non fugiat. duly registered
          with CAC with RC number 14**692**. Alaajo provides financial services
          under a cooperative licence (LSCS 16231).
        </p>
      </div>
      {Navlinks.map((navlink) => (
        <div key={navlink.label}>
          <h4 className="text-2xl py-4">{navlink.label}</h4>
          {navlink.Dropdowns.map((link) => (
            <ul key={link.item.tag} className="">
              <Link to={link.item.linkto}>
                <li className="text- p-2 duration-300 ease-in-out">
                  {link.item.tag}
                </li>
              </Link>
            </ul>
          ))}
          
        </div>
      ))}
    </footer>
  );
};

export default Footer;
