import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WhatsappChat from "./components/WhatsappChat/WhatsappChat";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import Courses from "./pages/Courses/Courses";
import Contact from "./pages/Contact/Contact";
import AboutIB from "./pages/IB/AboutIB/AboutIB";
import BenefitsIB from "./pages/IB/BenefitIB/BenefitsIB";
import IntroIG from "./pages/IGCSE/IntroIG/IntroIG";
import Subject from "./pages/IGCSE/SubjectOffered/Subject";
import WhytoChoose from "./pages/IGCSE/Whytochoose/WhytoChoose";
import Aslevel from "./pages/AS&A/Aslevel";
import CareerRelated from "./pages/IB/Career/CareerRelated";
import Diploma from "./pages/IB/Diploma/Diploma";
import IntroIB from "./pages/IB/IntroIB/IntroIB";
import Middleyears from "./pages/IB/MiddleYears/Middleyears";
import PrimaryYears from "./pages/IB/PrimaryYears/PrimaryYears";
import ParentGuidance from "./pages/CareerCounselling/ParentGuidance/ParentGuidance";
import EmotionalSupport from "./pages/CareerCounselling/EmotionalSupport/EmotionalSupport";
import SubjectSelection from "./pages/CareerCounselling/SubjectSelection/SubjectSelection";
import AdmissionAdvice from "./pages/CareerCounselling/AdmissionAdvice/AdmissionAdvice";
import WritingSupport from "./pages/WritingSupport/WritingSupport";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
  <ScrollToTop/>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-ib" element={<AboutIB />} />
        <Route path="/about-ig" element={<IntroIG />} />
        <Route path="/subject-ig" element={<Subject />} />
        <Route path="/why-to-choose" element={<WhytoChoose />} />
        <Route path="/ASlevel" element={<Aslevel />} />
        <Route path="/benefit-ib" element={<BenefitsIB />} />
        <Route path="/intro-ib" element={<IntroIB />} />
        <Route path="/middle-year" element={<Middleyears />} />
        <Route path="/primary-year" element={<PrimaryYears />} />
        <Route path="/career" element={<CareerRelated />} />
        <Route path="/diploma" element={<Diploma />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/parent" element={<ParentGuidance />} />
        <Route path="/emotional" element={<EmotionalSupport />} />
        <Route path="/Subject-selection" element={<SubjectSelection />} />
        <Route path="/Admission-Advice" element={<AdmissionAdvice />} />
        <Route path="/Writing-support" element={<WritingSupport />} />
      </Routes>
    </div>
    <WhatsappChat />
    <Footer />
    {/* <Navbar />
    <BenefitsIB />
    <Footer /> */}
  </Router>


);
