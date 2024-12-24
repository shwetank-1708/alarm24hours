import home from "../assets/home.png";
import Button from "../Components/Button";
import Features from "../Components/Features";
import Title from "../Components/Title";
import technology from "../assets/technology.png";
import remote from "../assets/remote.png";
import customization from "../assets/customization.png";
import environmental from "../assets/environmental.png";
import user from "../assets/user.png";
import peace from "../assets/peace.png";

const Home = () => {
  return (
    <div>
      {/* Main Component */}
      <div className="flex justify-center items-center p-[50px]">
        <div className="w-[30%] flex flex-col gap-4">
          <h1 className="text-[50px] font-bold text-[#434343]">
            Alarm <span className="text-sky-400">Monitoring System</span> As Low
            As $15 per <span className="text-sky-400">Month</span>
          </h1>
          <p className="font-bold text-gray-700">
            Includes : UL Listed Central Station, Internet Monitoring,
            Arm/Disarm via Phone & Web, Email, Text & Push Notifications, Remote
            Home Automation, Insurance Certificate.
          </p>
          <div className="flex gap-4">
            <Button text="Get Free Quotes" />
            <Button text="Contact Us" />
          </div>
        </div>

        <div>
          <img src={home} />
        </div>
      </div>

      {/* Quote Component */}
      <div className="bg-[#434343] flex justify-around items-center h-[150px]">
        <h3 className="text-white text-2xl font-bold">
          Schedule a FREE On Site Security Assessment
        </h3>
        <Button text="Get Free Quote" />
      </div>

      {/* Feature Component */}
      <Title
        heading="Why Choose US ?"
        des="Are you Confused ? Take a look at our key feature."
      />

      <div className="grid grid-cols-3 gap-10 text-center justify-center w-[1500px] mx-auto m-10">
        <Features
          src={technology}
          heading="Advanced Technology"
          des="Alarm 24 Hours services often utilize cutting-edge technology such as AI-powered cameras, motion sensors, and smart locks, providing more reliable and efficient security solutions."
        />

        <Features
          src={remote}
          heading="Remote Access and Monitoring"
          des="With Alarm 24 Hours, you can monitor your home or business remotely using your smartphone or computer. This allows you to check in on your property from anywhere"
        />

        <Features
          src={customization}
          heading="Customization"
          des="Alarm 24 Hours services typically offer customizable solutions tailored to your specific needs. you can customize your system to fit your requirements."
        />

        <Features
          src={environmental}
          heading="Environmental Monitoring"
          des="Alarm 24 Hours systems also offer environmental monitoring capabilities, such as smoke detectors and water leak sensors. This can help protect your from hazards."
        />

        <Features
          src={user}
          heading="User-Friendly Interface"
          des="Alarm 24 Hours typically come with user-friendly interfaces that are easy to navigate and control. This makes it simple for homeowners to set up and manage"
        />

        <Features
          src={peace}
          heading="Peace of Mind"
          des="Ultimately, investing in a smart security service can provide you with peace of mind knowing that your property is protected around the clock, whether you're at home or away."
        />
      </div>
    </div>
  );
};

export default Home;
