import React from 'react'
import {  FaAngleRight } from "react-icons/fa6";


const blogs = [
    {
        id: 1,
        image: "./blog (2).png",
        category: 'Technology and IT',
        title: "Unlocking Your Professional Future:",
        date: '17-03-2024',

    },
    {
        id: 2,
        image: "./blog (1).png",
        category: 'Technology and IT',
        title: "Zepto E-Com.    ",
        date: '13-02-2024',

    },
    {
        id: 3,
        image: "./blog (3).png",
        category: 'Finance',
        title: "Stock Market Analysis",
        date: '20-01-2024',

    },


];

const Blogs = () => {
    return (
        <>

            <div data-aos="fade-down" className='h-auto mt-10 p-4'>
                <div data-aos="fade-down" data-aos-duration="1000" className='text-center'>
                    <h1 className='text-primary font-bold text-3xl'>Recent Blogs</h1>
                    <p className='text-secondary mt-4'>Keep your finger on the pulse of industry trends with our Recent Blog. Dive into our latest <br />articles
                        for valuable insights and updates across various topics.</p>
                </div>
                <section data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap justify-around -m-4">
                            {blogs.map((blog) => (
                                <div className="p-4 " key={blog.id}>
                                    <div className="h-full transition-all hover:shadow-CBlack border border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                                        <img className="lg:h-32 w-96 md:h-24 object-fill" src={blog.image} alt="blog" />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.category}</h2>
                                            <h1 className="title-font text-2xl text-primary w-72 font-semibold mb-3"> <a href="#"> {blog.title}</a> </h1>

                                            <div>

                                                <div className='mt-10 flex justify-between items-center    '>
                                                    <p>{blog.date} </p>
                                                    <p> <a href="#" className='flex  justify-center items-center text-primary'>Read More <FaAngleRight className='ml-2'/></a></p>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <p><a href="#" className='text-end flex sm:justify-center lg:justify-end md:justify-end items-center px-40 text-secondary text-lg hover:text-primary'>Explore More <FaAngleRight /></a></p>
                </section>

            </div>

            <br/><br/>

        </>
    )
}

export default Blogs