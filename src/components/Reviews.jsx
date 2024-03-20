import React, { useState, useEffect } from 'react'
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const reviews = [
    {
        id: 1,
        image: "./ru (1).png",
        name: "John Doe",
        position: "Designer",
        rating:3,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque nisi, ac venenatis mauris congue id. Integer congue nisi ut."
    },
    {
        id: 2,
        image: "./ru (2).png",
        name: "Jane Doe",
        position: "Designer",
        rating:4,
        review: "Vivamus facilisis scelerisque est, nec lobortis libero pharetra eget. Donec convallis eros eu ipsum elementum, quis aliquet nisi viverra."
    },
    {
        id: 3,
        image: "./ru (3).png",
        name: "Alice Smith",
        position: "Designer",
        rating:5,
        review: "Sed vel nisi sit amet enim elementum auctor non et nulla. Vestibulum sodales eros a ante rhoncus, vel blandit velit tristique."
    },
    {
        id: 4,
        image: "./ru (4).png",
        name: "Bob Johnson",
        position: "Designer",
        rating:3,
        review: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin hendrerit eget justo vel luctus."
    },
    {
        id: 5,
        image: "./ru (6).jpg",
        name: "Emily Wilson",
        position: "Designer",
        rating:4,
        review: "Curabitur bibendum nulla nec libero ultricies, at ultricies quam viverra. Aliquam vitae gravida libero, vitae convallis purus."
    }
];

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleReviews, setVisibleReviews] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    useEffect(() => {
        const updateVisibleReviews = () => {
            if (window.innerWidth >= 768) {
                setVisibleReviews([reviews[currentIndex], reviews[(currentIndex + 1) % reviews.length]]);
            } else {
                setVisibleReviews([reviews[currentIndex]]);
            }
        };

        updateVisibleReviews();

        window.addEventListener('resize', updateVisibleReviews);

        return () => {
            window.removeEventListener('resize', updateVisibleReviews);
        };
    }, [currentIndex, reviews]);

    return (
        <div className='h-auto mt-10 p-10'>
            <div data-aos="fade-down" data-aos-duration="1000" className='text-center'>
                <h1 className='text-primary font-bold text-3xl'>Voices of Success: MyFuse Testimonials</h1>
                <p className='text-secondary mt-4'>Dive into firsthand experiences from our satisfied customers. Explore how MyFuse has transformed <br /> their
                    professional journey through their inspiring testimonials.</p>
            </div>

            <div data-aos="fade-down" data-aos-duration="2000" className="w-full  relative">
                <div className="flex justify-center  mt-8 mb-10 overflow-x-auto w-full">
                    {visibleReviews.map((review) => (
                        <div key={review.id} className="w-full">
                            <div className="sm:p-2 p-0">
                                <div className="bg-primary-light transition-all p-8  rounded-3xl">
                                    <a className="inline-flex flex-wrap items-center">
                                        <img
                                            alt="testimonial"
                                            src={review.image}
                                            className=" w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col  pl-4">
                                            <span className="title-font font-semibold text-primary text-xl ">{review.name}</span>
                                            <span className="text-gray-500 text-sm">{review.position}</span>
                                            <span className='flex mt-2'>
                                                {[...Array(5)].map((_, index) => (
                                                    <FaStar key={index} className={`text-${index < review.rating ? 'primary' : 'secondary'} mr-1`} />
                                                ))}
                                            </span>
                                        </span>
                                    </a>
                                                  
                                    <p className="mt-4 text-secondary leading-relaxed mb-6">
                                        {review.review}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <div className="flex justify-center absolute bottom-4 left-0 right-0">
                    {reviews.map((review, index) => (
                        <span key={index} className={`inline-block w-2 h-2 mx-1 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}></span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews