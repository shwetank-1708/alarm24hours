import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex lg:justify-around justify-between shadow-xl p-4 items-center">
      <div>
        <img src={logo} className="w-[200px]" />
      </div>

      <div className="hidden lg:flex gap-4 items-center font-bold text-[#434343]">
        <NavLink to="/" className="hover:text-sky-400">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/about" className="hover:text-sky-400">
          <p>ABOUT US</p>
        </NavLink>
        <NavLink to="/residential" className="hover:text-sky-400">
          <p>RESIDENTIAL</p>
        </NavLink>
        <NavLink to="/business" className="hover:text-sky-400">
          <p>BUSINESS</p>
        </NavLink>
        <NavLink to="/products" className="hover:text-sky-400">
          <p>PRODUCTS</p>
        </NavLink>
        <NavLink to="/resources" className="hover:text-sky-400">
          <p>RESOURCES</p>
        </NavLink>
      </div>

      <div className="text-xl lg:hidden">
        <TiThMenu
          onClick={() => setVisible(true)}
          className="cursor-pointer hover:text-sky-400"
        />
      </div>

      <div
        className={`absolute top-0 right-0 bg-white overflow-hidden transition-all lg:hidden flex flex-col gap-2 font-bold text-[#434343] items-center shadow-2xl m-2 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <IoClose
          className="text-xl cursor-pointer hover:text-sky-400"
          onClick={() => setVisible(false)}
        />
        <NavLink to="/" className="hover:text-sky-400">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/about" className="hover:text-sky-400">
          <p>ABOUT US</p>
        </NavLink>
        <NavLink to="/residential" className="hover:text-sky-400">
          <p>RESIDENTIAL</p>
        </NavLink>
        <NavLink to="/business" className="hover:text-sky-400">
          <p>BUSINESS</p>
        </NavLink>
        <NavLink to="/products" className="hover:text-sky-400">
          <p>PRODUCTS</p>
        </NavLink>
        <NavLink to="/resources" className="hover:text-sky-400">
          <p>RESOURCES</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
