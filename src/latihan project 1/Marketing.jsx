import React, {useState} from 'react';
import hero5 from './img/hero5.jpg'
import hero6 from './img/hero6.jpg'
import hero7 from './img/hero7.jpg'
export default function Marketing() {
    const [showDesign, setShowDesign] = useState(false);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2600) {
        setShowDesign(true);
      }
    });
    return (
        <section id='marketing' className={`relative ${
            showDesign? "bottom-0 opacity-100" : "-bottom-52 opacity-0"
          } duration-700 ease-in-out px-8 md:px-16 lg:px-32 pt-16 pb-24 bg-white`}>
            <div className='text-center text-sm mb-8'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2'>Caring is the new marketing</h2>
                <p className='text-sm md:text-sm text-center lg:text-lg  mb-4 md:mb-8 lg:mb-12'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4'>
                <div className='relative'>
                    <img src={hero5} alt="..." width={300} height={300} loading='lazy' fetchpriofiry='low' className='h-full w-auto object-cover rounded-lg' />
                    <div className='absolute w-[80%] left-[50%] -translate-x-[50%] translate-y-[50%] -bottom-[0%] p-2 bg-slate-100 rounded-lg '>
                        <p className="text-center text-sm xl:text-lg">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <a href="#" className='text-Primary text-sm xl:text-lg font-semibold justify-center flex items-center gap-8'>
                            <span>Meet all customers</span>
                            <span>
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" stroke="#28CB8B" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className='relative'>
                    <img src={hero6} alt="..." width={300} height={300} fetchpriority="low" loading="lazy" className=' w-full h-auto rounded-lg' />
                    <div className='absolute w-[80%] left-[50%] -translate-x-[50%] translate-y-[50%] -bottom-[0%] p-2 bg-slate-100 rounded-lg '>
                        <p className="text-center text-sm xl:text-lg">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <a href="#" className='text-Primary text-sm xl:text-lg font-semibold justify-center flex items-center gap-8'>
                            <span>Meet all customers</span>
                            <span>
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" stroke="#28CB8B" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className='relative'>
                    <img src={hero7} alt="..." width={300} height={300} fetchpriority="low" loading="lazy" className=' w-full h-auto rounded-lg' />
                    <div className='absolute w-[80%] left-[50%] -translate-x-[50%] translate-y-[50%] -bottom-[0%] p-2 bg-slate-100 rounded-lg '>
                        <p className="text-center text-sm xl:text-lg">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <a href="#" className='text-Primary text-sm xl:text-lg font-semibold justify-center flex items-center gap-8'>
                            <span>Meet all customers</span>
                            <span>
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" stroke="#28CB8B" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}