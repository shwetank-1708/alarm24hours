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
import Blog from "../Components/Blog";
import blog_1 from "../assets/blog_1.jpg";
import blog_2 from "../assets/blog_2.jpg";
import blog_3 from "../assets/blog_3.jpg";
import Review from "../Components/Review";
import review_1 from "../assets/review_1.png";
import review_2 from "../assets/review_2.png";
import review_3 from "../assets/review_3.png";

const Home = () => {
  return (
    <div>
      {/* Main Component */}
      <div className="flex lg:flex-row flex-col 2xl:justify-center justify-around items-center gap-4 p-[50px]">
        <div className="2xl:w-[30%] lg:w-[50%] sm:w-[80%] w-full flex flex-col gap-4">
          <h1 className="sm:text-[50px] text-[30px] font-bold text-[#434343]">
            Alarm <span className="text-sky-400">Monitoring System</span> As Low
            As $15 per <span className="text-sky-400">Month</span>
          </h1>
          <p className="font-bold text-gray-700">
            Includes : UL Listed Central Station, Internet Monitoring,
            Arm/Disarm via Phone & Web, Email, Text & Push Notifications, Remote
            Home Automation, Insurance Certificate.
          </p>
          <div className="flex gap-4">
            <Button text="Get Free Quote" />
            <Button text="Contact Us" />
          </div>
        </div>

        <div className="2xl:w-[40%] lg:w-[50%] sm:w-[80%] w-full">
          <img src={home} />
        </div>
      </div>

      {/* Quote Component */}
      <div className="bg-[#434343] flex md:flex-row flex-col justify-around  items-center h-[150px]">
        <h3 className="text-white text-2xl font-bold text-center">
          Schedule a FREE On Site Security Assessment
        </h3>
        <Button text="Get Free Quote" />
      </div>

      {/* Feature Component */}
      <div>
        <Title
          heading="Why Choose US ?"
          des="Are you Confused ? Take a look at our key feature."
        />

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 text-center justify-center xl:w-[80%] w-full mx-auto p-10">
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

      {/* Blog Component */}
      <div>
        <Title
          heading="Our Blog"
          des="Take a look at what happens around Alarm 24 Hours"
        />

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 text-center justify-center xl:w-[80%] w-full mx-auto p-10">
          <Blog
            src={blog_1}
            des="Trends in Home Automation: A Deep Dive into the Future with Alarm 24 Hours Inc"
          />
          <Blog
            src={blog_2}
            des="Business Security & Alarm Monitoring Systems"
          />
          <Blog
            src={blog_3}
            des="Cabling for Security Alarm and Cameras in Commercial Buildings"
          />
        </div>
      </div>

      {/* Review Component */}
      <div className="bg-gray-100">
        <Title
          heading="Happy Customers"
          des="We provide best customer service. Look at what our customers say about us"
        />

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 text-center justify-center xl:w-[75%] w-full mx-auto p-10">
          <Review
            des="Alarm 24 Hours Inc has installed security cameras at BLS offices across GTA, Ontario. We are extremely satisfied with their prompt and efficient service."
            src={review_1}
            customer_name="Reagan Saphire"
            position="(IT Manager - Canada)"
          />
          <Review
            des="We (Global Analytical Laboratories) recently upgraded our Security System with Alarm 24 Hours, highly recommend their professional service."
            src={review_2}
            customer_name="Amandeep"
            position="(MD)"
          />
          <Review
            des="Alarm 24 Hours Inc has successfully installed security cameras at our Mississauga office in Greater Toronto Area (GTA), Ontario. We are thoroughly impressed services."
            src={review_3}
            customer_name="Rana Sajjad"
            position="(Management)"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
