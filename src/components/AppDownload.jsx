import React from 'react'
import { FaGooglePlay ,FaApple } from "react-icons/fa";

const AppDownload = () => {
    return (
        <>
            <section class="mb-20  body-font">
                <div class="container bg-primary-light rounded-3xl  mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src="./app.png" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-primary">Download Our App</h1>
                        <p class="mb-8 text-gray-600 leading-relaxed">Experience MyFuse on the go! Download our mobile app to access internship opportunities, job listings, challenges, and resume creation tools anytime, anywhere. Stay connected with the latest updates and notifications, and take control of your professional journey with ease.</p>
                        <div class="flex lg:flex-row md:flex-col">
                            <button class=" bg-gradient-to-r from-primary to-primary-second text-white inline-flex py-3 px-5 rounded-lg items-center hover:shadow transition-all focus:outline-none">
                               <FaGooglePlay className='text-xl'/>
                                <span class="ml-4 flex items-start flex-col leading-none">
                                    <span class="text-xs  mb-1">GET IT ON</span>
                                    <span class="title-font font-medium">Google Play</span>
                                </span>
                            </button>
                            <button class=" bg-gradient-to-r from-primary to-primary-second text-white inline-flex py-3 px-5 rounded-lg items-center hover:shadow transition-all lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0  focus:outline-none">
                                <FaApple className='text-2xl'/>
                                <span class="ml-4 flex items-start flex-col leading-none">
                                    <span class="text-xs mb-1">Download on the</span>
                                    <span class="title-font font-medium">App Store</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppDownload