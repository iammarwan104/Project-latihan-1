import React from 'react';
import hero3 from './img/hero3.png';
export default function Design() {
    return (
        <section id='design' className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] py-8 gap-12 items-center px-8 md:px-16 lg:px-32">
            <img src={hero3} alt="hero 2" width={300} height={300} fetchpriority="low" loading="lazy" className=' w-[70%] md:w-full mx-auto mb-2 xl:w-[70%]' />
            <div className=''>
                <h2 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">How to design your site footer like we did</h2>
                <p className=' text-sm md:text-base text-justify  mb-4 md:mb-8 lg:mb-12'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.</p>
                <button type="button" class="text-white bg-Primary hover:bg-Primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
            </div>
        </section>
    )
}