import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-around shadow-xl p-4">
      <div>
        <img src={logo} className="w-[200px]" />
      </div>

      <div className="flex gap-4 items-center font-bold text-sky-400">
        <NavLink to="/">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/about">
          <p>ABOUT US</p>
        </NavLink>
        <NavLink to="/residential">
          <p>RESIDENTIAL</p>
        </NavLink>
        <NavLink to="/business">
          <p>BUSINESS</p>
        </NavLink>
        <NavLink to="/products">
          <p>PRODUCTS</p>
        </NavLink>
        <NavLink to="/resources">
          <p>RESOURCES</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
