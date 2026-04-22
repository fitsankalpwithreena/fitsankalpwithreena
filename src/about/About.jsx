import React from "react";
import yogaProfile from "../assets/reena-profile.jpg";

 export default function About() {
  return (

<section id="about" className="bg-blue-50 py-20">
  <div className="max-w-6xl mx-auto p-6">
    
    <h3 className="text-4xl text-center font-bold mb-12">About Reena</h3>
     {/* Larger Floating Image */}
    <img
      src={yogaProfile}
      alt="Online yoga class by Reena for beginners"
      className="float-none md:float-left w-full md:w-96 mr-0 md:mr-8 mb-4"
    />

    {/* Text Content */}
     {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed m-1">
        Namaste! I’m Reena, an internationally certified yoga teacher with 500+ hours of teacher training,
        currently pursuing an <strong>MSc in Yoga</strong>.
      </p>

      {/* Story */}
      <p className="text-lg text-gray-700 leading-relaxed m-1">
      My journey into yoga began during my <strong>12 years in the corporate world </strong>, where a fast-paced lifestyle of long sitting hours, 
      deadlines, and constant mental pressure gradually started affecting my overall well-being. Like many others, I began experiencing 
      stiffness, low energy, weight gain, and an imbalance in both body and mind.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed m-1">
       Yoga started as a small step to feel better—but gradually, it became a life-changing practice.
      With consistent effort, I experienced improved flexibility, better focus, and a deep sense of calm. 
      This transformation inspired me to dive deeper into yoga, not just as a practice, but as a way of life.
      </p>

      {/* Global + Work */}
      <p className="text-lg text-gray-700 leading-relaxed m-1">
        Today, I work with students from different parts of the world, helping them build a simple, 
        consistent, and sustainable yoga routine that fits into their daily lives
      </p>
     <p className="text-lg text-gray-700 leading-relaxed m-1" >
      <strong>I offer personalized one-on-one and small group sessions based on individual needs and goals.</strong>
     </p>
      {/* Specialization Block */}
      <div>
        <p className="text-lg font-semibold text-gray-800 mb-2 m-1">
          I specialize in helping:
        </p>

        <ul className="text-lg text-gray-700 space-y-2">
          <li>✔ Beginners who are new to yoga</li>
          <li>✔ People dealing with stress and stiffness from modern lifestyles</li>
          <li>✔ Individuals working on weight management</li>
          <li>✔ Those managing lifestyle conditions like diabetes and thyroid imbalances</li>
          <li>✔ Women focusing on hormonal balance and overall wellness</li>
        </ul>
      </div>

      {/* Approach */}
      <p className="text-lg text-gray-700 leading-relaxed m-1">
         My approach is simple—yoga should be accessible, safe, and effective for everyone. 
       Whether you are just starting or looking to deepen your practice, I focus on step-by-step guidance, 
       proper alignment, and mindful movement.
      </p>
     <p className="text-lg text-gray-700 leading-relaxed m-1">
       I truly believe that yoga is not about perfection, but about creating balance and consistency in everyday life.
      </p>
      {/* Signature Line */}
      <div className="bg-green-100 p-4 rounded-xl">
        <p className="text-lg font-medium text-green-800">
          🌿 You don’t need to be flexible to start—just willing to begin.
        </p>
      </div>
  </div>
</section>
  );
}