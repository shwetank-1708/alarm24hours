import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Residential from "./Pages/Residential";
import Business from "./Pages/Business";
import Products from "./Pages/Products";
import Resources from "./Pages/Resources";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-merriweather">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/business" element={<Business />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
