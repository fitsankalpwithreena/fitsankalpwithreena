import React from "react";
// import './App.css'
import Header from './header/Header.jsx';
import Home from "./home/Home.jsx";
import Classes from "./classes/Classes.jsx";
import Videos from "./videos/Videos.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import { useRef } from "react";
import TrialForm from "./trialForm/TrialForm.jsx";
import Footer from "./footer/Footer.jsx";

export default function App() {
   const modalRef = useRef();
   
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Header openTrial={() => modalRef.current.openModal()} />
      <Home openTrial={() => modalRef.current.openModal()} />
      <About/>
      <Classes openTrial={() => modalRef.current.openModal()} />
      <Videos/>
      <Contact/>
      <Footer/>
      {/* Global modal */}
      <TrialForm ref={modalRef} />
    </div>
  );
}
