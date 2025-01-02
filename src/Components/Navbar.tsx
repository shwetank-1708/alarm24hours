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

  const toggleNavbar = (isVisible: boolean) => {
    setVisible(isVisible);
    if (isVisible) {
      document.body.style.overflow = "hidden"; // Prevent page scroll
    } else {
      document.body.style.overflow = ""; // Restore page scroll
    }
  };

  return (
    <div
      className={`flex lg:justify-around justify-between shadow-xl p-4 items-center top-0 text-sm box-border bg-white ${
        visible ? "static" : "sticky"
      }`}
    >
      <div>
        <img src={logo} className="w-[200px]" />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex gap-4 items-center font-bold text-[#434343]">
        {/* Desktop Navbar - Home */}
        <NavLink to="/" className="hover:text-sky-400">
          <p>HOME</p>
        </NavLink>

        {/* Desktop Navbar - About */}
        <NavLink to="/about" className="hover:text-sky-400">
          <p>ABOUT US</p>
        </NavLink>

        {/* Desktop Navbar - Residential */}
        <div className="group relative">
          <div className="flex items-center gap-1 hover:text-sky-400 cursor-pointer">
            <p>RESIDENTIAL</p>
            <FaAngleDown />
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {/* <p className="hover:text-sky-400">HOME SECURITY</p> */}
              <NavLink
                to="/residential/home_security"
                className="hover:text-sky-400"
              >
                {" "}
                HOME SECURITY
              </NavLink>
              <hr />
              <NavLink
                to="/residential/video_monitoring"
                className="hover:text-sky-400"
              >
                VIDEO MONITORING
              </NavLink>
              <hr />
              <NavLink
                to="/residential/energy_management"
                className="hover:text-sky-400"
              >
                ENERGY MANAGEMENT
              </NavLink>
              <hr />
              <NavLink
                to="/residential/access_control"
                className="hover:text-sky-400"
              >
                ACCESS CONTROL
              </NavLink>
              <hr />
              <NavLink to="/residential/apps" className="hover:text-sky-400">
                APPS
              </NavLink>
            </div>
          </div>
        </div>

        {/* Desktop Navbar - Business */}
        <div className="group relative">
          <div className="flex items-center gap-1 hover:text-sky-400 cursor-pointer">
            <p>BUSINESS</p>
            <FaAngleDown />
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/business/business_security_alarm"
                className="hover:text-sky-400"
              >
                BUSINESS SECURITY ALARM
              </NavLink>
              <hr />
              <NavLink
                to="/business/surveillance_solutions"
                className="hover:text-sky-400"
              >
                SURVEILLANCE SOLUTIONS
              </NavLink>
              <hr />
              <NavLink
                to="/business/business_access_control"
                className="hover:text-sky-400"
              >
                BUSINESS ACCESS CONTROL
              </NavLink>
            </div>
          </div>
        </div>

        {/* Desktop Navbar - Products */}
        <div className="group relative">
          <div className="flex items-center gap-1 hover:text-sky-400 cursor-pointer">
            <p>PRODUCTS</p>
            <FaAngleDown />
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <NavLink to="/products/qolsys" className="hover:text-sky-400">
                QOLSYS IQ PANEL 4
              </NavLink>
              <hr />
              <NavLink to="/products/hikvision" className="hover:text-sky-400">
                HIKVISION
              </NavLink>
              <hr />
              <NavLink
                to="/products/alarmdotcom"
                className="hover:text-sky-400"
              >
                ALARM.COM
              </NavLink>
              <hr />
              <NavLink to="/products/honeywell" className="hover:text-sky-400">
                HONEYWELL
              </NavLink>
            </div>
          </div>
        </div>

        {/* Desktop Navbar - Resources */}
        <div className="group relative">
          <div className="flex items-center gap-1 hover:text-sky-400 cursor-pointer">
            <p>RESOURCES</p>
            <FaAngleDown />
          </div>

          <div className="group-hover:block hidden absolute dropdown-menu bg-white w-[250px] left-[-15px] top-5 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <NavLink to="/resources/contact" className="hover:text-sky-400">
                {" "}
                CONTACT
              </NavLink>
              <hr />
              <NavLink to="/resources/blog" className="hover:text-sky-400">
                {" "}
                BLOG
              </NavLink>
              <hr />
              <NavLink to="/resources/careers" className="hover:text-sky-400">
                {" "}
                CAREERS
              </NavLink>
              <hr />
              <NavLink to="/resources/login" className="hover:text-sky-400">
                {" "}
                LOGIN
              </NavLink>
              <hr />
              <NavLink to="/resources/signup" className="hover:text-sky-400">
                {" "}
                SIGNUP
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar - Hamburger Menu */}
      <div className="text-xl lg:hidden">
        <TiThMenu
          // onClick={() => setVisible(true)}
          onClick={() => toggleNavbar(true)}
          className="cursor-pointer hover:text-sky-400"
        />
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 right-0 bg-white h-screen overflow-y-auto transition-all lg:hidden font-bold text-[#434343] shadow-2xl ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-2 min-h-[100vh]">
          {/* Close Icon */}
          <IoClose
            className="text-xl cursor-pointer hover:text-sky-400"
            // onClick={() => setVisible(false)}
            onClick={() => toggleNavbar(false)}
          />

          {/* Mobile Navbar - Home */}
          <NavLink
            to="/"
            className="hover:text-sky-400"
            // onClick={() => setVisible(false)}
            onClick={() => toggleNavbar(false)}
          >
            <p>HOME</p>
          </NavLink>

          {/* Mobile Navbar- About */}
          <NavLink
            to="/about"
            className="hover:text-sky-400"
            // onClick={() => setVisible(false)}
            onClick={() => toggleNavbar(false)}
          >
            <p>ABOUT US</p>
          </NavLink>

          {/* Mobile Navbar - Residential */}
          <div>
            <div
              className="flex items-center gap-1 hover:text-sky-400 cursor-pointer"
              onClick={() => {
                setResidential(!residential);
                setBusiness(false);
                setProducts(false);
                setResources(false);
              }}
            >
              <p>RESIDENTIAL</p>
              <FaAngleDown />
            </div>

            <div className={`p-2 ${residential ? "block" : "hidden"}`}>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/residential/home_security"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setResidential(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  HOME SECURITY
                </NavLink>
                <hr />
                <NavLink
                  to="/residential/video_monitoring"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setResidential(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  VIDEO MONITORING
                </NavLink>
                <hr />
                <NavLink
                  to="/residential/energy_management"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setResidential(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  ENERGY MANAGEMENT
                </NavLink>
                <hr />
                <NavLink
                  to="/residential/access_control"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setResidential(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  ACCESS CONTROL
                </NavLink>
                <hr />
                <NavLink
                  to="/residential/apps"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setResidential(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  APPS
                </NavLink>
                <hr />
              </div>
            </div>
          </div>

          {/* Mobile Navbar - Business */}
          <div>
            <div
              className="flex items-center gap-1 hover:text-sky-400 cursor-pointer"
              onClick={() => {
                setBusiness(!business);
                setResidential(false);
                setProducts(false);
                setResources(false);
              }}
            >
              <p>BUSINESS</p>
              <FaAngleDown />
            </div>

            <div className={`p-2 ${business ? "block" : "hidden"}`}>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/business/business_security_alarm"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setBusiness(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  BUSINESS SECURITY ALARM
                </NavLink>
                <hr />
                <NavLink
                  to="/business/surveillance_solutions"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setBusiness(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  SURVEILLANCE SOLUTIONS
                </NavLink>
                <hr />
                <NavLink
                  to="/business/business_access_control"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setBusiness(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  BUSINESS ACCESS CONTROL
                </NavLink>
                <hr />
              </div>
            </div>
          </div>

          {/* Mobile Navbar - Products */}
          <div>
            <div
              className="flex items-center gap-1 hover:text-sky-400 cursor-pointer"
              onClick={() => {
                setProducts(!products);
                setResidential(false);
                setBusiness(false);
                setResources(false);
              }}
            >
              <p>PRODUCTS</p>
              <FaAngleDown />
            </div>

            <div className={`p-2 ${products ? "block" : "hidden"}`}>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/products/qolsys"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setProducts(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  QOLSYS IQ PANEL 4
                </NavLink>
                <hr />
                <NavLink
                  to="/products/hikvision"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setProducts(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  HIKVISION
                </NavLink>
                <hr />
                <NavLink
                  to="/products/alarmdotcom"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setProducts(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  ALARM.COM
                </NavLink>
                <hr />
                <NavLink
                  to="/products/honeywell"
                  // onClick={() => setVisible(false)}
                  onClick={() => {
                    toggleNavbar(false);
                    setProducts(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  HONEYWELL
                </NavLink>
                <hr />
              </div>
            </div>
          </div>

          {/* Mobile Navbar - Resources */}
          <div>
            <div
              className="flex items-center gap-1 hover:text-sky-400 cursor-pointer"
              onClick={() => {
                setResources(!resources);
                setResidential(false);
                setBusiness(false);
                setProducts(false);
              }}
            >
              <p>RESOURCES</p>
              <FaAngleDown />
            </div>

            <div className={`p-2 ${resources ? "block" : "hidden"}`}>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/resources/contact"
                  onClick={() => {
                    toggleNavbar(false);
                    setResources(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  CONTACT
                </NavLink>
                <hr />
                <NavLink
                  to="/resources/blog"
                  onClick={() => {
                    toggleNavbar(false);
                    setResources(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  BLOG
                </NavLink>
                <hr />
                <NavLink
                  to="/resources/careers"
                  onClick={() => {
                    toggleNavbar(false);
                    setResources(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  CAREERS
                </NavLink>
                <hr />
                <NavLink
                  to="/resources/login"
                  onClick={() => {
                    toggleNavbar(false);
                    setResources(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  LOGIN
                </NavLink>
                <hr />
                <NavLink
                  to="/resources/signup"
                  onClick={() => {
                    toggleNavbar(false);
                    setResources(false);
                  }}
                  className="hover:text-sky-400"
                >
                  {" "}
                  SIGNUP
                </NavLink>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
