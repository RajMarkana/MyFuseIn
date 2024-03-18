import React from 'react'

const AiResume = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center w-6/6 justify-between md:py-0 sm:pt-16">
                {/* Text Content */}
                <div data-aos="fade-left" data-aos-duration="1000" className="px-8 flex flex-col justify-center  items-center">
                    <div className=' w-fit'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8"><span className='px-1 bg-primary text-white leading-relaxed mr-2'>Revolutionize </span> Your Job Search <br/>with AI-Enhanced Resumes!</h1>
                        <p className="text-lg   text-secondary mb-8">
                            Upgrade your job application game with AI-enhanced resumes. Get noticed, impress employers, and secure your dream career
                            with ease.
                        </p>
                        <div className="col-span-1 px-4 py-2 rounded-full shadow bg-gradient-to-r from-primary to-primary-second text-white mb-10 w-fit space-x-4">
                            <button className='flex justify-center items-center'><img src="/aiIcon2.png" className='mr-2' width={20} alt="" /><p>Create Now</p></button>
                        </div>
                        {/* Add any additional content here */}
                    </div>
                </div>

                {/* Image */}
                <div data-aos="fade-down" data-aos-duration="1500" className="flex justify-center items-center w-5/5  px-8">
                    <img src="/resume.png" width={800} alt="Hero Image" className=" rounded-lg" />
                </div>
            </div>
        </>
    )
}

export default AiResume