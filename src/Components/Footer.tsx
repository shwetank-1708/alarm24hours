import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import FooterLi from "./FooterLi";
import FooterHeading from "./FooterHeading";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#434343] text-white">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 justify-center xl:w-[80%] w-full mx-auto p-10">
          <div className="md:col-span-2 flex flex-col gap-4">
            <FooterHeading heading="Alarm24hours" />
            <p>
              Alarm 24 Hours is an advanced smart security service designed to
              provide comprehensive protection for homes and businesses around
              the clock. Combining cutting-edge technology with professional
              monitoring and customizable features, Alarm 24 Hours offers peace
              of mind to users by safeguarding their premises against various
              threats, including burglary, fire, and environmental hazards.
            </p>
            <div>
              <h6 className="font-bold">Talk with Expert</h6>
              <div className="flex items-center gap-2">
                <BsTelephoneFill />
                <p>+1 236 332 3880</p>
              </div>
            </div>
            <div>
              <h6 className="font-bold">Email Us On</h6>
              <div className="flex items-center gap-2">
                <IoMail />
                <p>info@alarm24hours.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <FooterHeading heading="Residential" />
            <ul className="flex flex-col gap-2">
              <li>
                <FooterLi text="Home Security" />
              </li>
              <li>
                <FooterLi text="Video Monitoring" />
              </li>
              <li>
                <FooterLi text="Energy Management" />
              </li>
              <li>
                <FooterLi text="Access Control" />
              </li>
              <li>
                <FooterLi text="Apps" />
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <FooterHeading heading="Business" />
            <ul className="flex flex-col gap-2">
              <li>
                <FooterLi text="Business Security Alarm" />
              </li>
              <li>
                <FooterLi text="Surveillance Solutions" />
              </li>
              <li>
                <FooterLi text="Business Access Control" />
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <FooterHeading heading="Security System" />
            <ul className="flex flex-col gap-2">
              <li>
                <FooterLi text="Qolsys IQ Panel 4" />
              </li>
              <li>
                <FooterLi text="Hikvision" />
              </li>
              <li>
                <FooterLi text="Alarm.com" />
              </li>
              <li>
                <FooterLi text="Honeywell" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#131313] text-white flex lg:flex-row flex-col gap-4 justify-around min-h-10 items-center p-4">
        <div>
          <p className="text-center">
            2024 © All Rights Reserved Alarm 24 Hours Inc | Designed and
            Developed by Smarteyeapps.com
          </p>
        </div>
        <div className="flex gap-4 text-xl">
          <FaLinkedin />
          <FaYoutube />
          <FaXTwitter />
          <FaPinterest />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
