 import React from "react";
 import Header from '../header/Header.jsx';
 import yogaImg from "../assets/reena-hero.jpg";

export default function Home({ openTrial }) {
  return (
    <div
      id ="home" className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${yogaImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-start min-h-screen px-6">
        <div className="text-center text-white max-w-2xl">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {/* Transform Your Mind & Body Through Yoga */}
             Online Yoga Classes for Mind & Body
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Join Reena’s online yoga classes designed for beginners, weight loss, stress relief, and overall wellness.
          </p>
         
          <button  
          onClick={openTrial}
          className="bg-orange-700 px-6 py-3 rounded-xl text-lg hover:bg-orange-500 transition cursor-pointer">
            Start Your Journey
          </button>

        </div>
      </div>
    </div>
  );
}