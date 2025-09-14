import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import Homepage from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Courts from "./pages/court.jsx";
import Products from "./pages/products.jsx";
import Services from "./pages/Services.jsx";
import Testimonials from "./pages/Testimonials.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/courts" element={<Courts />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
}
