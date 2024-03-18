import React from 'react'
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


const HomePage = () => {
    return (
        <>
            <NavBar/>   
            <Hero/>
            <Challenge/>
            <JobFuse/>
            <Companies/>
            <Jobs/>
            <Categories/>
            <AiResume/> 
            <Numbers/>
            <Reviews/>
            <Blogs/>
            <Footer/>
        </>
    )
}

export default HomePage