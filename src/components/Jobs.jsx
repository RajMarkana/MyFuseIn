import React from 'react'
import { LuBuilding2 } from "react-icons/lu";
import { FaLocationDot, FaAngleRight } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const jobs = [
    {
        id: 1,
        image: "/job (2).png",
        position: "Ui/Ux Designer",
        name: "AMDOCS",
        location: "Bengaluru",
        pkg: "4-7 LPA",
        timing: 'Full Time',
        category: 'Technology and IT',

    },
    {
        id: 2,
        image: "/job (1).png",
        position: "Full Stack",
        name: "AIRBUS",
        location: "Bengaluru",
        pkg: "4-7 LPA",
        timing: 'Full Time',
        category: 'Technology and IT',

    },
    {
        id: 3,
        image: "/company (7).png",
        position: "MERN Stack",
        name: "IBM",
        location: "Bengaluru",
        pkg: "4-7 LPA",
        timing: 'Full Time',
        category: 'Technology and IT',

    },
    

];

const Jobs = () => {
    return (
        <>

            <div  className='h-auto mt-10 p-4'>
                <div data-aos="fade-down" data-aos-duration="1000" className='text-center'>
                    <h1 className='text-primary font-bold text-3xl'>Recent Jobs</h1>
                    <p className='text-secondary mt-4'>Recent job trends highlight positions in data analysis, telemedicine, and remote project management.</p>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap justify-around -m-4">
                            {jobs.map((job) => (
                                <div data-aos="zoom-in" data-aos-duration="1500" className="p-4 " key={job.id}>
                                    <div className="h-full transition-all hover:shadow-CBlack border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                                        <img className="lg:h-32 w-96 md:h-24 object-fill" src={job.image} alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-2xl text-primary font-semibold mb-3">{job.position} </h1>
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{job.category}</h2>

                                            <div>

                                                <div className='mt-10 flex items-center    '>
                                                    <div className='w-1/2  flex items-center  '>
                                                        <LuBuilding2 className='text-2xl mr-4' />
                                                        <p>{job.name} </p>

                                                    </div>
                                                    <div className='w-1/2  flex items-center j '>

                                                        <FaLocationDot className='text-2xl mr-4' />
                                                        <p>{job.location} </p>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className='mt-4 flex items-center '>
                                                    <div className='w-1/2  flex items-center  '>
                                                        <FaMoneyBill className='text-2xl mr-4' />
                                                        <p>{job.pkg} </p>

                                                    </div>
                                                    <div className='w-1/2  flex items-center  '>

                                                        <IoTime className='text-2xl mr-4' />
                                                        <p>{job.timing} </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div  className="mt-10 text-center space-x-4">
                                                <button className="px-4 py-2 rounded-full shadow bg-gradient-to-r from-primary to-primary-second text-white mb-10">Apply Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <p data-aos="fade-down" data-aos-duration="1000"><a href="#" className='text-end flex sm:justify-center lg:justify-end md:justify-end items-center px-40 text-secondary text-lg hover:text-primary'>Explore More <FaAngleRight /></a></p>
                </section>

            </div>

        </>
    )
}

export default Jobs