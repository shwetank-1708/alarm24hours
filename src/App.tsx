import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Business from "./Pages/Business";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import HomeSecurity from "./Pages/HomeSecurity";
import VideoMonitoring from "./Pages/VideoMonitoring";
import EnergyManagement from "./Pages/EnergyManagement";
import AccessControl from "./Pages/AccessControl";
import Apps from "./Pages/Apps";

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
        <Route path="/business" element={<Business />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
