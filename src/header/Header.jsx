import React,{useState,useEffect}from "react";
import { motion } from "framer-motion";
import { Menu, X} from "lucide-react";

export default function Header({ openTrial }) {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const [active, setActive] = useState("home");

 const scrollToSection = (id) => {
  const section = document.getElementById(id);

  section?.scrollIntoView({ behavior: "smooth" });

  setActive(id); // instantly highlight on click
};

useEffect(() => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    let current = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <header className="w-full bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Brand */}
            <motion.a
              href="#"
              className="flex items-center gap-3 text-slate-900 dark:text-slate-100"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="leading-tight">
                <div className="text-2xl font-bold leading-tight">
                  <span className="text-[#ce6219]">FitSankalpWithReena</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  Yoga • Wellness • Flow
                </div>
                
              </div>
            </motion.a>

            {/* Desktop nav */}
    <nav className="hidden md:flex items-center text-lg gap-6">

  {["home", "about", "classes", "videos", "contact"].map((item) => (
    <button
      key={item}
      onClick={() => scrollToSection(item)}
      className={`relative group cursor-pointer ${
        active === item
          ? "text-orange-500"
          : "text-slate-700 dark:text-slate-200"
      }`}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}

      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 ${
          active === item ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </button>
  ))}

</nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
             {/* BOOK A CLASS BUTTON */}
                <button
                  onClick={openTrial}
                  className="px-4 py-2 rounded-2xl bg-orange-700 text-white font-medium shadow hover:bg-orange-500 transition cursor-pointer"
                >
                  Book Free Trial
                </button>
              </div>

              {/* Mobile menu */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t"
        >
          <div className="px-4 pt-4 pb-6 space-y-3">

    {["home","about", "classes", "videos", "contact"].map((item) => (
      <button
        key={item}
        // onClick={() => {
        //   scrollToSection(item)
        //   // setOpen(false);
        // }}
  onClick={() => {
  setOpen(false);
  setTimeout(() => {
    scrollToSection(item);
  }, 300);
}}
        className={`block w-full text-left px-2 py-2 rounded-md cursor-pointer ${
          active === item
            ? "text-orange-500 bg-orange-50 dark:bg-slate-800"
            : "text-slate-700 dark:text-slate-200"
        }`}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </button>
    ))}

  <button
    // onClick={openTrial}
    onClick={() => {
    openTrial();
    setOpen(false); // close menu
  }}
    className="block w-full text-center mt-3 px-4 py-2 rounded-2xl bg-orange-700 text-white hover:bg-orange-500 cursor-pointer"
  >
    Book Free Trial
  </button>

</div>
        </motion.div>
      </header>  
    </>
  );
}
