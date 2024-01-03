import React from "react"
import hero_1 from './img/hero1.png';
export default function () {
    return (
        <section id="dashboard" className="md:h-screen w-screen pt-[8rem] md:pt-0 px-8 md:px-16 lg:px-32 grid grid-cols-1 gap-8 md:grid-cols-2 justify-between items-center">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-0 font-semibold">Lessons and insights
                    <div className="text-Primary">from 8 years</div>
                </h2>
                <p className="text-[11.14px] text-Gray mb-4 md:mb-8 lg:mb-12">Where to grow your business as a photographer: site or social media?</p>
                <button type="button" className="text-white bg-Primary hover:bg-Primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs lg:text-sm px-4 lg:px-5 py-2 lg:py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
            </div>
            <img src={hero_1} alt="..." width={300} height={300} className="w-[50%] md:w-[210.16px] lg:w-[260.16px] xl:w-[310.16px] mx-auto md:mx-auto h-auto" />
        </section>
    )
}