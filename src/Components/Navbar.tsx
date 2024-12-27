import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex lg:justify-around justify-between shadow-xl p-4 items-center sticky top-0 bg-white text-sm">
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
        <NavLink to="/residential" className="group relative">
          <div>
            <p className="hover:text-sky-400">RESIDENTIAL</p>
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <p className="hover:text-sky-400">HOME SECURITY</p>
              <hr />
              <p className="hover:text-sky-400">VIDEO MONITORING</p>
              <hr />
              <p className="hover:text-sky-400">ENERGY MANAGEMENT</p>
              <hr />
              <p className="hover:text-sky-400">ACCESS CONTROL</p>
              <hr />
              <p className="hover:text-sky-400">APPS</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/business" className="group relative">
          <div>
            <p className="hover:text-sky-400">BUSINESS</p>
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <p className="hover:text-sky-400">BUSINESS SECURITY ALARM</p>
              <hr />
              <p className="hover:text-sky-400">SURVEILLANCE SOLUTIONS</p>
              <hr />
              <p className="hover:text-sky-400">BUSINESS ACCESS CONTROL</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/products" className="group relative">
          <div>
            <p className="hover:text-sky-400">PRODUCTS</p>
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <p className="hover:text-sky-400">QOLSYS IQ PANEL 4</p>
              <hr />
              <p className="hover:text-sky-400">HIKVISION</p>
              <hr />
              <p className="hover:text-sky-400">ALARM.COM</p>
              <hr />
              <p className="hover:text-sky-400">HONEYWELL</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/resources" className="group relative">
          <div>
            <p className="hover:text-sky-400">RESOURCES</p>
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <p className="hover:text-sky-400">CONTACT</p>
              <hr />
              <p className="hover:text-sky-400">BLOG</p>
              <hr />
              <p className="hover:text-sky-400">CAREERS</p>
            </div>
          </div>
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
        <NavLink
          to="/"
          className="hover:text-sky-400"
          onClick={() => setVisible(false)}
        >
          <p>HOME</p>
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-sky-400"
          onClick={() => setVisible(false)}
        >
          <p>ABOUT US</p>
        </NavLink>
        <NavLink
          to="/residential"
          className="hover:text-sky-400"
          onClick={() => setVisible(false)}
        >
          <p>RESIDENTIAL</p>
        </NavLink>
        <NavLink
          to="/business"
          className="hover:text-sky-400"
          onClick={() => setVisible(false)}
        >
          <p>BUSINESS</p>
        </NavLink>
        <NavLink
          to="/products"
          className="hover:text-sky-400"
          onClick={() => setVisible(false)}
        >
          <p>PRODUCTS</p>
        </NavLink>
        <NavLink
          to="/resources"
          className="hover:text-sky-400"
          onClick={() => setVisible(false)}
        >
          <p>RESOURCES</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
