import React from 'react'

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center w-6/6 justify-between md:py-0 sm:pt-16">
            {/* Text Content */}
            <div className="px-8 flex flex-col justify-center items-center">
                <div data-aos="fade-down" data-aos-duration="1000">

                    <h1  className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8"><span className='px-1 bg-primary text-white leading-relaxed mr-2'>Unleash </span> Your Potential With  <br />Limitless Opportunities</h1>
                    <p  className="text-lg text-secondary mb-8">
                        Discover a world of opportunities with internships,projects, and a gateway to your professional future.
                    </p>
                    <div  className="col-span-1  space-x-4">
                        <button className="px-4 py-2 rounded-full shadow bg-gradient-to-r from-primary to-primary-second text-white mb-10">Explore More</button>

                    </div>

                </div>
            </div>

            {/* Image */}
            <div data-aos="zoom-in" data-aos-duration="1000"  className="flex justify-center items-center w-5/5  px-8">

                <img src="/Frame 2.png" width={800} alt="Hero Image" className=" rounded-lg" />

            </div>
        </div>
    )
}

export default Hero