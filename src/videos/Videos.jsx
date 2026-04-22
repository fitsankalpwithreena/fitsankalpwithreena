import React from "react";

 export default function Videos() {
  return (
<section id="videos" className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    <h3 className="text-4xl font-bold text-center mb-20">
      Practice With Me
    </h3>

    {/* Video Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Video 1 */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/EHrRNmYGbIg?si=Pf8InQB7k5yTn7AN"
          title="Yoga Video 1"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video 2 */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/Q3BfWA_yh7E?si=qkXBiwueBNbvYzqX"
          title="Yoga Video 2"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video 3 */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/mXZdHECWNZ4?si=WbD06kZEx8rKnReX"
          title="Yoga Video 3"
          allowFullScreen
        ></iframe>
      </div>

    </div>

    {/* YouTube Button */}
    <div className="text-center mt-20 px-4">
  <a
    href="https://www.youtube.com/@fitsankalpwithreena"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block w-full sm:w-auto text-center bg-orange-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-orange-500 transition"
  >
    ▶ Visit My YouTube Channel
  </a>
</div>

  </div>
</section>
  );
}