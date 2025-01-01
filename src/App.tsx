import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import HomeSecurity from "./Pages/HomeSecurity";
import VideoMonitoring from "./Pages/VideoMonitoring";
import EnergyManagement from "./Pages/EnergyManagement";
import AccessControl from "./Pages/AccessControl";
import Apps from "./Pages/Apps";
import BusinessSecurityAlarm from "./Pages/BusinessSecurityAlarm";
import SurveillanceSolutions from "./Pages/SurveillanceSolutions";
import BusinessAccessControl from "./Pages/BusinessAccessControl";
import Qolsys from "./Pages/Qolsys";
import Hikvision from "./Pages/Hikvision";
import AlarmDotCom from "./Pages/AlarmDotCom";
import Honeywell from "./Pages/Honeywell";
import Blog from "./Pages/Blog";
import Careers from "./Pages/Careers";

function App() {
  return (
    <div className="font-merriweather">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/residential/home_security" element={<HomeSecurity />} />
        <Route
          path="/residential/video_monitoring"
          element={<VideoMonitoring />}
        />
        <Route
          path="/residential/energy_management"
          element={<EnergyManagement />}
        />
        <Route path="/residential/access_control" element={<AccessControl />} />
        <Route path="/residential/apps" element={<Apps />} />
        <Route
          path="/business/business_security_alarm"
          element={<BusinessSecurityAlarm />}
        />
        <Route
          path="/business/surveillance_solutions"
          element={<SurveillanceSolutions />}
        />
        <Route
          path="/business/business_access_control"
          element={<BusinessAccessControl />}
        />
        <Route path="/products/qolsys" element={<Qolsys />} />
        <Route path="/products/hikvision" element={<Hikvision />} />
        <Route path="/products/alarmdotcom" element={<AlarmDotCom />} />
        <Route path="/products/honeywell" element={<Honeywell />} />
        <Route path="/resources/contact" element={<Contact />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
