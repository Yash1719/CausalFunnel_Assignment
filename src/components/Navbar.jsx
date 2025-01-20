import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} alt="logo" className="md:w-48 w-36" />
      </div>
    </nav>
  );
};

export default Navbar;