import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Challenge from '../components/Challenge'
import JobFuse from '../components/JobFuse'
import Companies from '../components/Companies'
import Jobs from '../components/Jobs'
import Categories from '../components/Categories'
import AiResume from '../components/AiResume'
import Numbers from '../components/Numbers'
import Reviews from '../components/Reviews'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import AppDownload from '../components/AppDownload'
import ApplyProcess from '../components/ApplyProcess'


const HomePage = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (

                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="text-center">
                        <div className="mb-4 flex justify-center items-center flex-col">
                            <img src="./MyFuse.In (1) 2.png" width={200}  alt="" />
                            <h1 className="text-xl font-light mt-2 text-gray-700">Discover New Opportunities...</h1>
                           
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-6 h-6 border-t-2 border-primary rounded-full animate-spin"></div>
                         
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <NavBar />
                    <Hero />
                    <Challenge />
                    <JobFuse />
                    <Companies />
                    <Jobs />
                    <Categories />
                    <AiResume />
                    <Numbers />
                    <ApplyProcess />
                    <Reviews />
                    <Blogs />
                    <AppDownload />
                    <Footer />
                </>
            )}
        </>
    )
}

export default HomePage