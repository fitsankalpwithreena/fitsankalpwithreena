
import { useState, forwardRef, useImperativeHandle } from "react";

const TrialForm = forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    goal: "",
    medical: "",
    language: "",
    time: ""
  });

  // expose function to parent
  useImperativeHandle(ref, () => ({
    openModal: () => setShowModal(true)
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
const message = encodeURIComponent(
  `Hi Reena, I would like to book a trial class.

Name: ${formData.name}
Age: ${formData.age}
Goal: ${formData.goal}
Medical Info: ${formData.medical}
Time Slot: ${formData.time}
Preferred Language: ${formData.language}`
);

    window.open(`https://wa.me/918208920622?text=${message}`, "_blank");

    setShowModal(false);
  };

  return (
    <>
      {/* REMOVE this button if using external buttons */}
      
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[200]">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4">
              Book Free Trial
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" placeholder="Your Name" onChange={handleChange} className="w-full border p-3 rounded-lg" required/>
              <input name="age" type="text" inputMode="numeric" maxLength={3} placeholder="Your Age"
                    onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 3);
                  handleChange(e);
                  }}
                  className="w-full border p-3 rounded-lg"
              />
  
              <input name="goal" placeholder="Goal" onChange={handleChange} className="w-full border p-3 rounded-lg" required />
              <textarea
                name="medical"
                placeholder="Medical Information (if any). Please mention injuries or health conditions, or write 'None'."
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />      
              <select
                name="time"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg cursor-pointer" required
              >
                <option value="">Select Time Slot</option>
                 <optgroup label="Morning">
                <option value="6:00 AM">6:00 AM</option>
                <option value="7:00 AM">7:00 AM</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                </optgroup>
                 <optgroup label="Evening">
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                </optgroup>
                
              </select>
              <select
                name="language"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg cursor-pointer" required
              >
                <option value="">Preferred Language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
                <p className="text-sm text-gray-500 text-center">
                You’ll be redirected to WhatsApp to confirm your booking 📲
              </p>
              <button className="block w-full bg-orange-700 text-white  py-3 rounded-lg hover:bg-orange-500 cursor-pointer">
                Submit
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
});

export default TrialForm;