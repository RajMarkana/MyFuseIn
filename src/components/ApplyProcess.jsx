import React from 'react'
import { IoShieldOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { FiAnchor } from "react-icons/fi";
const AppDownload = () => {
    return (
        <>
            <section >
                <div class="container px-5 text-secondary  justify-center items-center mx-auto flex flex-wrap">
                    <div class="flex flex-wrap justify-center items-center w-full">
                    <img src="./ApplyGIF.gif" width={700} data-aos="fade-down" data-aos-duration="1500" alt="Apply Image" className=" rounded-lg" />
                        <div class=" lg:w-2/5 flex flex-col justify-center mt-11  items-center md:w-1/2 md:pl-10 md:py-6">
                            <div data-aos="fade-down" data-aos-duration="1500" class="flex  relative pb-12">
                                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-10 h-10 rounded-full shadow bg-gradient-to-r from-primary to-primary-second inline-flex items-center justify-center text-white relative ">
                                    <IoShieldOutline/>
                                </div>
                                <div class="flex-grow pl-4">
                                    <h2 class="font-medium title-font text-sm mb-1 tracking-wider">STEP 1</h2>
                                    <h2 class="font-medium title-font text-md text-primary  mb-1 tracking-wider">Search a job</h2>
                                    <p class="leading-relaxed">Looking for your next career opportunity? Explore our job listings and find the perfect match for your skills and aspirations. Your dream job may be just a click away!</p>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="2000" class="flex relative pb-12">
                                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>  
                                </div>
                                <div class="flex-shrink-0 w-10 h-10 rounded-full shadow bg-gradient-to-r from-primary to-primary-second inline-flex items-center justify-center text-white relative ">
                                    <LuSettings/>
                                </div>
                                <div class="flex-grow pl-4">
                                    <h2 class="font-medium title-font text-sm mb-1 tracking-wider">STEP 2</h2>
                                    <h2 class="font-medium title-font text-md text-primary mb-1 tracking-wider">Apply for job</h2>
                                    <p class="leading-relaxed">Ready to take the next step in your career? Browse our job openings and start your application process today. Your future awaits – apply for your dream job now!.</p>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="2500" class="flex relative pb-12">
                              
                                <div class="flex-shrink-0 w-10 h-10 rounded-full shadow bg-gradient-to-r from-primary to-primary-second inline-flex items-center justify-center text-white relative ">
                                   <FiAnchor/>
                                </div>
                                <div class="flex-grow pl-4">
                                    <h2 class="font-medium title-font text-sm mb-1 tracking-wider">STEP 3</h2>
                                    <h2 class="font-medium title-font text-md text-primary mb-1 tracking-wider">Get your job</h2>
                                    <p class="leading-relaxed">Unlock your career potential with us! Browse through our job listings and take the first step towards securing your dream job. Your future career is just a few clicks away..</p>
                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppDownload