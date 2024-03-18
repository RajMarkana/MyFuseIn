import React, { useEffect, useState, useRef } from 'react'
import { PiStudent,PiNoteDuotone  } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";

const Numbers = () => {

    const [totalUsers, setTotalUsers] = useState(0);
    const [totalClients, setTotalClients] = useState(0);
    const [totalApplications, setTotalApplications] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startAnimations();
                    observer.unobserve(entry.target);
                }
            });
        });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    const startAnimations = () => {
        animateCounter('totalUsers', 2500);
        animateCounter('totalClients', 3000);
        animateCounter('totalApplications', 5500);
    };

    const animateCounter = (stateName, targetValue) => {
        const duration = 2000; // Duration for the animation in milliseconds
        const increment = Math.ceil(targetValue / (duration / 50)); // Calculate increment value for smoother animation

        let currentValue = 0;
        const interval = setInterval(() => {
            currentValue += increment;

            switch (stateName) {
                case 'totalUsers':
                    setTotalUsers(currentValue > targetValue ? targetValue : currentValue);
                    break;
                case 'totalClients':
                    setTotalClients(currentValue > targetValue ? targetValue : currentValue);
                    break;
                case 'totalApplications':
                    setTotalApplications(currentValue > targetValue ? targetValue : currentValue);
                    break;
                default:
                    break;
            }

            if (currentValue >= targetValue) {
                clearInterval(interval);
            }
        }, 50); // Update every 50 milliseconds for smoother animation
    };

    return (
        <>

            <div class="flex flex-wrap justify-around m-14 mt-4 mb-16  text-center">
                <div data-aos="zoom-in" data-aos-duration="1000" class="p-4 md:w-1/4 sm:w-1/2 w-full" ref={counterRef}>
                    <div class=" px-4 py-6 rounded-lg">
                        <PiStudent className="text-slate-600 w-12 h-12 mb-3 inline-block" />
                        <h1 className='mt-5 font-semibold text-primary text-3xl'>{totalUsers}+</h1>
                        <p class="text-secondary text-xl ">Active Students</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" class="p-4 md:w-1/4 sm:w-1/2 w-full" ref={counterRef}>
                    <div class=" px-4 py-6 rounded-lg">
                        <CgWorkAlt className="text-slate-600 w-12 h-12 mb-3 inline-block" />
                        <h1 className='mt-5 font-semibold text-primary text-3xl'>{totalClients}+</h1>
                        <p class="text-secondary text-xl ">Active Jobs</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" class="p-4 md:w-1/4 sm:w-1/2 w-full" ref={counterRef}>
                    <div class=" px-4 py-6 rounded-lg">
                        <PiNoteDuotone className="text-slate-600 w-12 h-12 mb-3 inline-block" />
                        <h1 className='mt-5 font-semibold text-primary text-3xl'>{totalApplications}+</h1>
                        <p class="text-secondary text-xl ">Active Application</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Numbers