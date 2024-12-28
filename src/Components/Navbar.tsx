import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [residential, setResidential] = useState<boolean>(false);
  const [business, setBusiness] = useState<boolean>(false);
  const [products, setProducts] = useState<boolean>(false);
  const [resources, setResources] = useState<boolean>(false);

  return (
    <div
      className={`flex lg:justify-around justify-between shadow-xl p-4 items-center top-0 text-sm box-border bg-white ${
        visible ? "static" : "sticky"
      }`}
    >
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
          <div className="flex items-center gap-1 hover:text-sky-400">
            <p>RESIDENTIAL</p>
            <FaAngleDown />
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
          <div className="flex items-center gap-1 hover:text-sky-400">
            <p>BUSINESS</p>
            <FaAngleDown />
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
          <div className="flex items-center gap-1 hover:text-sky-400">
            <p>PRODUCTS</p>
            <FaAngleDown />
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
          <div className="flex items-center gap-1 hover:text-sky-400">
            <p>RESOURCES</p>
            <FaAngleDown />
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <NavLink to="/resources/contact">
                {" "}
                <p className="hover:text-sky-400">CONTACT</p>
              </NavLink>
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
        className={`absolute top-0 right-0 bg-white overflow-hidden transition-all lg:hidden font-bold text-[#434343] items-left shadow-2xl ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col gap-2 p-2">
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
            // onClick={() => setVisible(false)}
          >
            <div
              className="flex items-center gap-1 hover:text-sky-400"
              onClick={() => setResidential(!residential)}
            >
              <p>RESIDENTIAL</p>
              <FaAngleDown />
            </div>

            <div className={`p-2 ${residential ? "block" : "hidden"}`}>
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
                <hr />
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/business"
            // onClick={() => setVisible(false)}
          >
            <div
              className="flex items-center gap-1 hover:text-sky-400"
              onClick={() => setBusiness(!business)}
            >
              <p>BUSINESS</p>
              <FaAngleDown />
            </div>

            <div className={`p-2 ${business ? "block" : "hidden"}`}>
              <div className="flex flex-col gap-2">
                <p className="hover:text-sky-400">BUSINESS SECURITY ALARM</p>
                <hr />
                <p className="hover:text-sky-400">SURVEILLANCE SOLUTIONS</p>
                <hr />
                <p className="hover:text-sky-400">BUSINESS ACCESS CONTROL</p>
                <hr />
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/products"
            // onClick={() => setVisible(false)}
          >
            <div
              className="flex items-center gap-1 hover:text-sky-400"
              onClick={() => setProducts(!products)}
            >
              <p>PRODUCTS</p>
              <FaAngleDown />
            </div>

            <div className={`p-2 ${products ? "block" : "hidden"}`}>
              <div className="flex flex-col gap-2">
                <p className="hover:text-sky-400">QOLSYS IQ PANEL 4</p>
                <hr />
                <p className="hover:text-sky-400">HIKVISION</p>
                <hr />
                <p className="hover:text-sky-400">ALARM.COM</p>
                <hr />
                <p className="hover:text-sky-400">HONEYWELL</p>
                <hr />
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/resources"
            // onClick={() => setVisible(false)}
          >
            <div
              className="flex items-center gap-1 hover:text-sky-400"
              onClick={() => setResources(!resources)}
            >
              <p>RESOURCES</p>
              <FaAngleDown />
            </div>

            <div className={`p-2 ${resources ? "block" : "hidden"}`}>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/resources/contact"
                  onClick={() => setVisible(false)}
                >
                  {" "}
                  <p className="hover:text-sky-400">CONTACT</p>
                </NavLink>
                <hr />
                <p className="hover:text-sky-400">BLOG</p>
                <hr />
                <p className="hover:text-sky-400">CAREERS</p>
                <hr />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
