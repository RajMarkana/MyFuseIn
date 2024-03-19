import React from 'react'
import { BsFillTrophyFill } from "react-icons/bs";

const Challenge = () => {
    return (
        <>



            <div data-aos-duration="1000" className='h-auto bg-primary-light p-4'>
                <div data-aos="fade-down" className='text-center'>
                    <h1 className='text-primary font-bold text-3xl'>Challenge</h1>
                    <p className='text-secondary mt-4'>Elevate your skills and embrace growth with our Regular Challenge – a daily journey to unlock your full potential.</p>
                </div>
                <div className='w-full sm:p-10 p-4 sm:m-0 mt-7 flex justify-center '>
                    <div className="bg-white shadow-2xl  rounded-2xl overflow-hidden flex flex-col  md:flex-row">
                        {/* Left side (image) */}
                        <div className="">
                            <img src="./hackathon (2).jpg" alt="Web Design Challenge" className='h-full sm:w-96 w-full' width={400} />
                        </div>

                        {/* Right side (details) */}
                        <div className="p-9 pr-14">
                            <h2 data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="sm:text-2xl font-bold text-primary text-xl mb-2">Re-imagine MyFuse : Design & <br />Code Competition</h2>
                            <p data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="2000" className="text-lg font-light text-secondary mb-4">Design your Future,Code your Success</p>
                            <div data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="2000" className='flex items-center'>
                                <BsFillTrophyFill className='text-primary text-2xl mr-4' />
                                <p className='font-semibold text-2xl'>₹ 15,000</p>
                            </div>

                            <p data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="2000" className="text-xs mt-2 font-light text-secondary">Register to win cash & Exciting Prices</p>
                            <br />
                            <div data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="2000" className="col-span-1  space-x-4">
                                <button className="px-4 py-2 rounded-full shadow bg-gradient-to-r from-primary to-primary-second text-white mb-10">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Challenge