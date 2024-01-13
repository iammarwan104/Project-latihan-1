import React, { useState } from "react";
import hero_1 from "./img/hero1.png";
import BackToTopButton from "./BackToTopButtton";
export default function LandingPage() {
  const [showButtonBackToTop, setShowButtonBackToTop] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 620) {
      setShowButtonBackToTop(true);
    } else {
      setShowButtonBackToTop(false);
    }
  });

  const [animate, setAnimate] = useState(false)
  const [lesson, setLesson] = useState(false)

    function kopi(){
    setAnimate(true)
    setLesson(true)

  }

  return (
    <section onLoad={kopi}
      id="dashboard"
      className="md:h-screen w-screen pt-[8rem] md:pt-0 px-8 md:px-16 lg:px-32 grid grid-cols-1 gap-8 md:grid-cols-2 justify-between items-center"
    >
      <div className={`text-center md:text-left relative ${animate ? '-top-0 opacity-100' : '-top-32 opacity-0'} ease-in-linear duration-300 `}>

        <h2 className={` relative ${lesson ? '-left-0' : '-left-52'} duration-700 delay-100 ease-in-out text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-0 font-semibold`}>
          Lessons and insights
        </h2>

        <h2 className={` relative ${lesson ? '-left-0' : '-left-52'} duration-700 delay-200 ease-in-out text-3xl text-Primary md:text-4xl lg:text-5xl mb-2 md:mb-0 font-semibold`}>
        from 8 years
        </h2>

        <p className={` relative ${lesson ? '-left-0' : '-left-52'} duration-700 delay-300 ease-in-out text-[11.14px] text-Gray mb-4 md:mb-8 lg:mb-12`}>
          Where to grow your business as a photographer: site or social media?
        </p>

        <button
          type="button"
          className={` relative ${lesson ? '-left-0' : '-left-64'} duration-700 delay-500  text-white bg-Primary hover:bg-Primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs lg:text-sm px-5 lg:px-6 py-2.5 lg:py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
        >
          Register
        </button>
      </div>
      <img
        src={hero_1}
        alt="..."
        width={300}
        height={300}
        className={`relative ${animate ? '-top-0 opacity-100' : '-top-32 opacity-0'} ease-in-linear duration-300 w-z[50%] md:w-[210.16px] lg:w-[260.16px] xl:w-[310.16px] mx-auto md:mx-auto h-auto`}
      />
      <a
        href="#dashboard"
        className={`fixed z-50 bottom-[1rem] text-3xl duration-700 ${
          showButtonBackToTop ? "opacity-1 right-[1rem] animate-bounce delay-200" : "opacity-0 -right-[1rem]"
        }`}
      >
        <i className="fa-solid fa-circle-up"></i>
      </a>
    </section>
  );
}
