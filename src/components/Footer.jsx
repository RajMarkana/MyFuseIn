import React from 'react';
import { FaFacebook,FaInstagram  } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer data-aos="fade-up" className="bg-gradient-to-r from-primary to-primary-second text-white py-8 ">
            <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between px-4">

                <div className="md:w-1/2 lg:w-1/2 sm:w-full mb-4 md:mb-0">
                    <img src="/MyFuse.In (3) Footer.png" alt="Logo"  width={200} />
                
                    <p className="mt-3 ">Unlock endless career possibilities with Myfuse
                        – the platform <br/> that bridges gap between
                       Students and Job opportunities in India..y</p>
                       <br/>
                    <p>+91 7975364977</p>
                    <p>contact@myfuse.in</p>
                </div>

                <nav className="flex flex-col sm:justify-start md:justify-center lg:justify-center w-full sm:w-full md:w-1/3 lg:w-1/3  mb-4 md:mb-0 sm:mt-6">
                    <h1 className='text-2xl text-bold'>Quick Links</h1>
                    <a href="#" className="m-2 hover:text-gray-300">Home</a>
                    <a href="#" className="m-2 hover:text-gray-300">About</a>
                    <a href="#" className="m-2 hover:text-gray-300">Services</a>
                    <a href="#" className="m-2 hover:text-gray-300">Contact</a>
                </nav>

                <div className="md:w-1/3 lg:w-1/3 sm:w-full sm:mt-6">
                    <div className='bg-white flex rounded-full w-fit'>
                        <input type="email" className='ml-2 text-secondary p-2 rounded-full outline-none' placeholder='Email' height={100}/>
                        <button className='ml-2 bg-gradient-to-r from-primary to-primary-second text-white px-8 py-3 rounded-full'>Subscribe</button>
                    </div>
                    <br/>
                    <div className='ml-3 flex gap-4'>
                        <FaFacebook className='text-3xl'/>
                        <FaInstagram className='text-3xl'/>
                        <FaTwitter className='text-3xl'/>
                        <FaLinkedin className='text-3xl'/>
                    </div>
                    <br/>
                    <p className='ml-3'>
                    MyFuse.in Residency Rd, Shanthala Nagar Ashok Nagar, Bengaluru Karnataka 560025
                    </p>
                </div>
            </div>
            <br/><br/>
            <div className="text-center mt-4">
                <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
