import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { PiPathBold } from "react-icons/pi";
import { IoChatbubbles } from "react-icons/io5";
import { BsUiChecksGrid } from "react-icons/bs";


const JobFuse = () => {
    return (
        <>
            <div className='  mt-14 mb-14 p-4'>
                <div data-aos="fade-down" data-aos-duration="1000" className='text-center'>
                    <h1 className='text-primary font-bold text-3xl'>Job Fuse</h1>
                    <p className='text-secondary mt-3'>Join Job Fuse by MyFuse to bridge the gap between students and job opportunities in India. </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className='mt-14 flex flex-col lg:flex-row sm:flex-col box-border md:flex-col gap-14 '>
                        <div data-aos="fade-down" data-aos-duration="1500" className="bg-white transition-all rounded-3xl overflow-hidden flex flex-col  sm:flex-row md:flex-row hover:border hover:shadow-CBlack   border-primary">

                            <div className="w-36 p-4 sm:p-0  flex justify-center items-center">
                                <FaSuitcase className='sm:text-7xl text-5xl text-primary' />
                            </div>


                            <div className="p-9 pr-14">
                                <h2 className="font-bold text-primary text-lg mb-2">Right Job For You</h2>
                                <p className="text-lg font-light text-secondary mb-4">Myfuse's comprehensive platform is
                                    <br />designed to help you discover <br />the right job for you.</p>

                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" className="bg-white transition-all rounded-3xl overflow-hidden flex flex-col  sm:flex-row md:flex-row hover:border hover:shadow-CBlack   border-primary">

                            <div className="w-36  p-4 sm:p-0  flex justify-center items-center">
                                <IoChatbubbles className='text-7xl text-primary' />
                            </div>


                            <div className="p-9 pr-14">
                                <h2 className="font-bold text-primary text-lg mb-2">One to One Coverstatiion With HR's</h2>
                                <p className="text-lg font-light text-secondary mb-4">MyFuse offers the unique advantage of <br />one-to-one conversations with M<br />HR professionals</p>

                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3000" className='mt-14 flex flex-col lg:flex-row sm:flex-col box-border md:flex-col gap-14 '>
                        <div className="bg-white transition-all rounded-3xl overflow-hidden flex flex-col  sm:flex-row md:flex-row hover:border hover:shadow-CBlack   border-primary">

                            <div className="w-36  p-4 sm:p-0  flex justify-center items-center">
                                <PiPathBold className='text-7xl text-primary' />
                            </div>


                            <div className="p-9 pr-14">
                                <h2 className="font-bold text-primary text-lg mb-2">No Work Experiance required</h2>
                                <p className="text-lg font-light text-secondary mb-4"> 
                                    Myfuse welcomes applicants with no <br/>work experience, providing valuable <br/>opportunities and resources .</p>

                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="3000" className="bg-white transition-all rounded-3xl overflow-hidden flex flex-col  sm:flex-row md:flex-row hover:border hover:shadow-CBlack   border-primary">

                            <div className="w-36  p-4 sm:p-0  flex justify-center items-center">
                                <BsUiChecksGrid  className='text-7xl text-primary' />
                            </div>


                            <div className="p-9 pr-14">
                                <h2 className="font-bold text-primary text-lg mb-2">Easy to Apply</h2>
                                <p className="text-lg font-light text-secondary mb-4">Myfuse's straightforward application<br/> process is designed to be easy to apply .</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default JobFuse