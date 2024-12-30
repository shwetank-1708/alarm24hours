import about from "../assets/about.jpg";
import AboutImage from "../Components/AboutImage";
import AboutTitle from "../Components/AboutTitle";
import AboutPara from "../Components/AboutPara";
import AboutLi from "../Components/AboutLi";
import history from "../assets/history.jpg";
import home_solutions from "../assets/home_solutions.jpg";
import business_solutions from "../assets/business_solutions.jpg";
import products from "../assets/products.jpg";
import vision from "../assets/vision.jpg";

const About = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${about})` }}
        className="h-[20vh] bg-center-top flex items-center justify-center"
      >
        <div className="w-[70%]">
          <h1 className="text-white text-4xl">About Us</h1>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 p-[50px]">
        <div className="flex flex-col gap-2 w-[35%]">
          <AboutTitle title="Our History" />
          <AboutPara
            para="Welcome to Alarm 24 Hours Inc, your trusted partner in comprehensive
            security solutions. Founded with the mission to safeguard homes and
            businesses across the Greater Toronto Area (GTA) and Ontario, we
            have built a legacy of reliability, innovation, and unmatched
            customer service. With years of expertise in addressing diverse
            security needs, Alarm 24 Hours Inc has become a cornerstone for
            families and businesses seeking peace of mind. Our commitment
            extends across major cities, including Mississauga, Brampton,
            Vaughan, Markham, and beyond, delivering tailored security packages
            that protect what matters most."
          />
        </div>
        <div className="w-[35%]">
          <AboutImage src={history} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 p-8">
        <div className="w-[35%]">
          <AboutImage src={home_solutions} />
        </div>
        <div className="flex flex-col gap-2 w-[35%]">
          <AboutTitle title="Our Home Solutions" />
          <AboutPara
            para="At Alarm 24 Hours Inc, we understand that the safety of your home
            and property is paramount. Our home security offerings are designed
            to provide 24-hour surveillance, ensuring constant protection for
            you and your loved ones. Key features include:"
          />
          <ul className="list-disc">
            <li>
              <AboutLi
                bold="CCTV and IP Cameras: "
                normal="High-definition solutions with remote viewing capabilities."
              />
            </li>
            <li>
              <AboutLi
                bold="State-of-the-Art Security Systems: "
                normal="Integrating video surveillance, mobile app controls, and professional installations."
              />
            </li>
            <li>
              <AboutLi
                bold="Motion Detectors and Monitoring Services: "
                normal="Advanced sensors to detect and deter threats."
              />
            </li>
            <li>
              <AboutLi
                bold="Cutting-Edge Surveillance: "
                normal="AI-powered analytics and object detection to provide unparalleled safety for your homes. Our solutions are designed to adapt to your unique requirements, ensuring that every home is a fortress"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 p-8">
        <div className="flex flex-col gap-2 w-[35%]">
          <AboutTitle title="Our Business Solutions" />
          <AboutPara para="Protecting your assets, employees, and operations is crucial for every business. Alarm 24 Hours Inc specializes in creating robust security systems tailored to the complexities of commercial spaces. Our business solutions include:" />
          <ul className="list-disc">
            <li>
              <AboutLi
                bold="Access Control: "
                normal="Manage entry points and restricted areas with precision."
              />
            </li>
            <li>
              <AboutLi
                bold="Building Automation and Management Systems (BMS): "
                normal="Streamline operations with integrated security solutions."
              />
            </li>
            <li>
              <AboutLi
                bold="Fire Protection and Central Monitoring: "
                normal="Comprehensive systems to safeguard against threats."
              />
            </li>
            <li>
              <AboutLi
                bold="Jobsite Security Solutions: "
                normal="Ensuring the safety of construction sites and other high-risk areas. Whether you operate in Toronto, Oshawa, Hamilton, or Burlington, our customizable security packages provide peace of mind and operational efficiency."
              />
            </li>
          </ul>
        </div>
        <div className="w-[35%]">
          <AboutImage src={business_solutions} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 p-8">
        <div className="w-[35%]">
          <AboutImage src={products} />
        </div>
        <div className="flex flex-col gap-2 w-[35%]">
          <AboutTitle title="Our Security Products" />
          <AboutPara para="Alarm 24 Hours Inc takes pride in offering a wide array of cutting-edge security products that redefine industry standards:" />
          <ul className="list-disc">
            <li>
              <AboutLi
                bold="CCTV and 4G Network Cameras: "
                normal="Reliable, high-resolution monitoring."
              />
            </li>
            <li>
              <AboutLi
                bold="AI-Powered Surveillance: "
                normal="Advanced facial recognition, bandwidth optimization, and device-agnostic platforms."
              />
            </li>
            <li>
              <AboutLi
                bold="Motion Detectors and Alarm Systems: "
                normal="Equipped with 24/7 monitoring services."
              />
            </li>
            <li>
              <AboutLi
                bold="Building Automation and Mobile App Integrations: "
                normal="Enabling seamless control of security systems from any location. Every product we offer reflects our commitment to quality, innovation, and customer satisfaction."
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 p-8">
        <div className="flex flex-col gap-2 w-[35%]">
          <AboutTitle title="Our Vision" />
          <AboutPara para="At Alarm 24 Hours Inc, we deliver comprehensive security solutions tailored to meet the needs of both homeowners and businesses. From 24-hour surveillance to advanced access control systems, we are committed to safeguarding what matters most. With cutting-edge technology, professional installations, and exceptional customer service, we ensure peace of mind across Ontario. Choose Alarm 24 Hours Inc and stay one step ahead of potential threats. Contact us today to learn how we can elevate your security posture." />
        </div>
        <div className="w-[35%]">
          <AboutImage src={vision} />
        </div>
      </div>
    </div>
  );
};

export default About;
