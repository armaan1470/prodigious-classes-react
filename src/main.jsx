import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import Courses from "./pages/Courses/Courses";
import Contact from "./pages/Contact/Contact";
import WhatsappChat from "./components/WhatsappChat/WhatsappChat";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
  <ScrollToTop/>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <WhatsappChat />
  </Router>
);
