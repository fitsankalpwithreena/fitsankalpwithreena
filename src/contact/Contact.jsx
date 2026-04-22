import React from "react";

 export default function Contact() {
  return (
<section id="contact" className="py-30 bg-blue-50 my-20">
        
          
  <div className="max-w-4xl mx-auto text-center px-6">
    
    <h3 className="text-4xl font-bold mb-8">Get in Touch</h3>

    <p className="text-lg text-gray-700 mb-8">
      Have questions or not sure where to start? Feel free to reach out—I’ll be happy to guide you.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6">

      {/* WhatsApp */}
      <a
        href="https://wa.me/918208920622"
        target="_blank"
        className="bg-green-500 text-white px-6 py-3 rounded-full"
      >
        💬 Chat on WhatsApp
      </a>

      {/* Email */}
      <a
        href="mailto:fitsankalpwithreena@gmail.com"
        className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full"
      >
        📧 Send Email
      </a>

    </div>

  </div>
</section>
      
  );
}