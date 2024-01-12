import React, {useState} from 'react';
import hero2 from './img/hero2.png';
export default function Unsent() {
    const [showUnsent, setShowUnsent] = useState(false);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setShowUnsent(true);
      }
    });
    return (
        <section id='unsent' className={`relative ${
            showUnsent? "bottom-0 opacity-100" : "-bottom-52 opacity-0"
          } duration-700 ease-in-out grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-12 items-center justify-between py-8 px-8 md:px-16 lg:px-32`}>
            <img src={hero2} alt="hero 2" width={300} height={300} fetchpriority="low" loading="lazy" className='w-[70%] mx-auto md:w-full xl:w-[80%] h-auto mb-2 md:mb-0' />
            <div className='w-full'>
                <h2 className="text-3xl md:text-4xl xl:text-5xl mb-2 font-semibold">The unseen of spending three years at Pixelgrade</h2>
                <p className='text-base text-Gray mb-4 md:mb-8 lg:mb-12 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button type="button" className="text-white bg-Primary hover:bg-Primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs lg:text-sm px-5 lg:px-6 py-2.5 lg:py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
            </div>
        </section>
    )
}