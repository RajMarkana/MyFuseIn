import React from 'react'
import { MdOutlineHealthAndSafety ,MdOutlinePrecisionManufacturing,MdOutlineTour  } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { CiBank } from "react-icons/ci";
import { FaShop } from "react-icons/fa6";

const Categories = () => {
    return (
        <>
            <div className='h-auto mt-10 p-4'>
                <div data-aos="fade-down" data-aos-duration="1500" className='text-center'>
                    <h1 className='text-primary font-bold text-3xl'>Category</h1>
                    <p className='text-secondary mt-4'>High-demand job categories feature software development, nursing, and digital marketing roles</p>
                </div>
                <div class="flex flex-wrap  m-14 text-center">
                    <div data-aos="fade-down" data-aos-duration="1200" class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-primary-light group transition-all hover:shadow hover:bg-gradient-to-r from-primary to-primary-second px-4 py-6 rounded-lg">
                            <LuBrainCircuit className="text-primary group-hover:text-white w-12 h-12 mb-3 inline-block"/>
                            <p class="text-secondary text-xl group-hover:text-white mt-5"><a href="#">Education</a></p>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1400" class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-primary-light group transition-all hover:shadow hover:bg-gradient-to-r from-primary to-primary-second px-4 py-6 rounded-lg">
                            <FaShop className="text-primary w-12 h-12 mb-3 group-hover:text-white inline-block"/>
                            <p class="text-secondary text-xl group-hover:text-white mt-5"><a href="#">Retail & Consumer</a></p>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1600" class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-primary-light group transition-all hover:shadow hover:bg-gradient-to-r from-primary to-primary-second px-4 py-6 rounded-lg">
                            <MdOutlineTour className="text-primary group-hover:text-white w-12 h-12 mb-3 inline-block"/>
                            <p class="text-secondary text-xl group-hover:text-white mt-5"><a href="#">Travel & Tourism</a></p>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1800"  class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-primary-light group transition-all hover:shadow hover:bg-gradient-to-r from-primary to-primary-second px-4 py-6 rounded-lg">
                            <BsTruck className="text-primary w-12 h-12 mb-3 group-hover:text-white inline-block"/>
                            <p class="text-secondary text-xl group-hover:text-white mt-5"><a href="#">Transport & Logistic </a></p>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-primary-light group transition-all hover:shadow hover:bg-gradient-to-r from-primary to-primary-second px-4 py-6 rounded-lg">
                            <MdOutlinePrecisionManufacturing className="text-primary group-hover:text-white w-12 h-12 mb-3 inline-block"/>
                            <p class="text-secondary group-hover:text-white text-xl mt-5"><a href="#">Manufacturing</a></p>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2200" class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-primary-light group transition-all hover:shadow hover:bg-gradient-to-r from-primary to-primary-second px-4 py-6 rounded-lg">
                            <GrTechnology className="text-primary group-hover:text-white w-12 h-12 mb-3 inline-block"/>
                            <p class="text-secondary group-hover:text-white text-xl mt-5"><a href="#">Technology & IT</a></p>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2400" class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-primary-light group transition-all hover:shadow hover:bg-gradient-to-r from-primary to-primary-second px-4 py-6 rounded-lg">
                            <MdOutlineHealthAndSafety className="text-primary group-hover:text-white w-12 h-12 mb-3 inline-block"/>
                            <p class="text-secondary group-hover:text-white text-xl mt-5"><a href="#">Health Care</a></p>
                            
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2600" class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-primary-light group transition-all hover:shadow hover:bg-gradient-to-r from-primary to-primary-second px-4 py-6 rounded-lg">
                            <CiBank className="text-primary group-hover:text-white  w-12 h-12 mb-3 inline-block"/>
                            <p class="text-secondary text-xl group-hover:text-white mt-5"><a href="#">Fiance & Banking</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories