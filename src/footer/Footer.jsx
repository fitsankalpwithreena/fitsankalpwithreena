
import React from "react";
import { InstagramIcon, FacebookIcon, YouTubeIcon} from "../socialicons/socialIcons.jsx";

 export default function Footer() {
  return (
  
<footer className="py-8 bg-gray-900 text-white text-center mt-10 px-4"> 
  {/* Social Links */}
<div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 text-sm sm:text-lg">
<a 
  href="https://instagram.com/fitsankalpwithreena"
  target="_blank"
  rel="noopener noreferrer" 
  className="flex items-center gap-2 hover:text-pink-400">
    <InstagramIcon /> Instagram
  </a>
     <a  
        href="https://facebook.com/fitsankalpwithreena"
        target="_blank"
        rel="noopener noreferrer" 
        className="flex items-center gap-2 hover:text-blue-400">
    <FacebookIcon /> Facebook
  </a>
    <a  
      href="https://youtube.com/@fitsankalpwithreena"
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-red-400">
        {/* className="flex items-center gap-2 hover:scale-105 transition w-6 h-6 " */}
    <YouTubeIcon /> YouTube
  </a> 

  </div>

  {/* Small Line */}
  <p className="text-gray-400 text-sm mb-2">
    Follow me for yoga tips, routines & wellness guidance 🌿
  </p>

  {/* Copyright */}
  <p className="text-sm text-gray-500">
  © {new Date().getFullYear()} FitSankalpWithReena. All rights reserved.
  </p>

</footer>
      
  );
}