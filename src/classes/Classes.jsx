import React from "react";

 export default function Classes({ openTrial }) {
  return (

      <section id="classes" className="bg-blue-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    <h3 className="text-4xl font-bold text-center mb-12">
      My Classes
    </h3>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Class 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h4 className="text-2xl font-semibold mb-2">Beginner Yoga</h4>
        <p className="text-gray-600 mb-4">
          Perfect for those starting their yoga journey. Learn basic postures,
          breathing, and build flexibility step by step.
        </p>
        <ul className="text-gray-700 mb-4 space-y-1">
          <li>✔ No prior experience needed</li>
          <li>✔ Improves flexibility</li>
          <li>✔ Builds confidence</li>
        </ul>
        <a
    href="https://wa.me/918208920622?text=Hi%20Reena,%20I%20am%20interested%20in%20Beginner%20Yoga."
    target="_blank"
  >
    <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-500 cursor-pointer">
      Join Now
    </button>
  </a>
      </div>

      {/* Class 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h4 className="text-2xl font-semibold mb-2">Stress Relief Yoga</h4>
        <p className="text-gray-600 mb-4">
          Designed for relaxation and mental peace using breathing techniques
          and gentle movements.
        </p>
        <ul className="text-gray-700 mb-4 space-y-1">
          <li>✔ Reduces stress & anxiety</li>
          <li>✔ Improves sleep</li>
          <li>✔ Calms the mind</li>
        </ul>
        <a
    href="https://wa.me/918208920622?text=Hi%20Reena,%20I%20am%20interested%20in%20Stress%20Relief%20Yoga."
    target="_blank"
  >
    <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-500 cursor-pointer">
      Join Now
    </button>
  </a>
      </div>

      {/* Class 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h4 className="text-2xl font-semibold mb-2">Women’s Wellness Yoga</h4>
        <p className="text-gray-600 mb-4">
          Focused on hormonal balance, menstrual health, and overall well-being
          for women.
        </p>
        <ul className="text-gray-700 mb-4 space-y-1">
          <li>✔ Supports PCOS & hormonal balance</li>
          <li>✔ Gentle & effective practice</li>
          <li>✔ Improves energy levels</li>
        </ul>
         <a
    href="https://wa.me/918208920622?text=Hi%20Reena,%20I%20am%20interested%20in%20Women's%20Wellness%20Yoga."
    target="_blank"
  >
    <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-500 cursor-pointer">
      Join Now
    </button>
  </a>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
  <h4 className="text-2xl font-semibold mb-2">Weight Management Yoga</h4>
  <p className="text-gray-600 mb-4">
    Focused sessions to support fat loss, improve metabolism, and build a healthy lifestyle through yoga.
  </p>
  <ul className="text-gray-700 mb-4 space-y-1">
    <li>✔ Supports fat loss</li>
    <li>✔ Boosts metabolism</li>
    <li>✔ Improves energy levels</li>
  </ul>

  <a
    href="https://wa.me/918208920622?text=Hi%20Reena,%20I%20am%20interested%20in%20Weight%20Management%20Yoga."
    target="_blank"
  >
    <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-500 cursor-pointer">
      Join Now
    </button>
  </a>
</div>
<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
  <h4 className="text-2xl font-semibold mb-2">Corporate / Desk Yoga</h4>
  <p className="text-gray-600 mb-4">
    Designed for working professionals to reduce stiffness, improve posture, and relieve stress.
  </p>
  <ul className="text-gray-700 mb-4 space-y-1">
    <li>✔ Relieves neck & back pain</li>
    <li>✔ Reduces work stress</li>
    <li>✔ Improves posture</li>
  </ul>
  <a
    href="https://wa.me/918208920622?text=Hi%20Reena,%20I%20am%20interested%20in%20Corporate%20Yoga."
    target="_blank"
  >
    <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-500 cursor-pointer">
      Join Now
    </button>
  </a>
</div>

    </div>

  </div>
  <section id="trial" className="bg-green-50 py-20 my-20">
  <div className="max-w-4xl mx-auto text-center px-6">
    
    <h3 className="text-4xl font-bold mb-4">
      Book Your Free Trial Class
    </h3>

    <p className="text-lg text-gray-700 mb-8">
      Start your yoga journey with a free trial session. Whether you are a beginner
      or looking to improve your practice, I’ll guide you step by step.
    </p>

    <button
      onClick={openTrial}
      className="bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 transition cursor-pointer"
    >
      📲 Book Free Trial on WhatsApp
    </button>

  </div>
</section>

</section>
  );
}