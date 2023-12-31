import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

export function Button({ text, id, onClick }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className="bg-text-white py-2 px-6  rounded-2xl text-light-red-text text-sm font-bold min-w-fit hover:bg-red-400 m-2 hover:text-text-white"
    >
      {text}
    </button>
  );
}

// I want an onClick event in a button that is rendered as a component with defined props, is it good practice to add onClick as a props too? or is there a way to go about it ?

export function Logo() {
  return (
    <Link to="/">
      <img className="h-9 block " src={logo} alt="Site-logo" />
    </Link>
  );
}
