import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaLocationDot } from 'react-icons/fa6';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <>

            <footer data-aos="fade-up" className="bg-gradient-to-r from-primary to-primary-second text-white py-6 ">
                <div className="sm:px-10 px-5 mt-5 flex sm:text-lg text-md sm:flex-row justify-center flex-col gap-10">

                    <div className="sm:w-2/4">
                        <img src="./MyFuse.In (3) Footer.png" alt="Logo" width={200} />

                        <p className="mt-3 ">Unlock endless career possibilities with Myfuse
                            – the platform  that bridges gap between
                            Students and Job opportunities in India..y</p>
                        <br />
                        <p className='flex items-center gap-2'><IoIosCall /> +91 7975364977</p>
                        <p className='flex items-center gap-2'><MdEmail />contact@myfuse.in</p>
                        <br />
                        <p className='flex items-center gap-2' >
                            <FaLocationDot /> MyFuse.in Residency Rd, Shanthala Nagar Ashok Nagar, <br />Bengaluru Karnataka 560025
                        </p>
                    </div>

                    <div className='sm:w-1/4 flex sm:flex-row flex-col gap-10'>

                        <nav className=" flex flex-col">
                            <h1 className='sm:text-xl md:text-xl text-lg font-semibold'>Quick Links</h1>
                            <a href="#" className="m-2 hover:text-gray-300">Home</a>
                            <a href="#" className="m-2 hover:text-gray-300">About</a>
                            <a href="#" className="m-2 hover:text-gray-300">Login</a>
                            <a href="#" className="m-2 hover:text-gray-300">T&C</a>
                        </nav>
                        <nav className="flex flex-col">
                            <h1 className='sm:text-xl md:text-xl text-lg font-semibold'>Our Services</h1>
                            <a href="#" className="m-2 hover:text-gray-300">Application</a>
                            <a href="#" className="m-2 hover:text-gray-300">Policy</a>
                            <a href="#" className="m-2 hover:text-gray-300">About</a>
                            <a href="#" className="m-2 hover:text-gray-300">FAQ</a>
                        </nav>
                    </div>



                    <div className="sm:w-1/4">

                        <h1>Subscribe For New NewsLetters</h1>
                        <br />

                        <input type="email" className='sm:w-4/5 md:w-full w-full text-secondary sm:px-8  sm:py-3 px-4 py-2 md:px-3 md:py-2  rounded-full outline-none' placeholder='Email' height={100} />
                        <br />

                        <button className='my-4 bg-primary shadow-CBlack text-white sm:px-8  sm:py-3 px-4 py-2 md:px-3 md:py-2 rounded-full'>Subscribe</button>


                        <br />
                        <div className='ml-3 flex gap-4'>
                            <FaFacebook className='text-3xl' />
                            <FaInstagram className='text-3xl' />
                            <FaTwitter className='text-3xl' />
                            <FaLinkedin className='text-3xl' />
                        </div>

                    </div>
                </div>
                <br /><br />
                <div className="text-center mt-4">
                    <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
                </div>

            </footer>


        </>
    );
}

export default Footer;
