import React from 'react'
import { FaSuitcase } from "react-icons/fa6";


const JobFuseModel = ({title,dec,icon}) => {
  return (
    <>
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col  sm:flex-row md:flex-row">

        <div className="w-36  flex justify-center items-center">
          <FaSuitcase className='text-7xl text-primary' />
        </div>


        <div className="p-9 pr-14">
          <h2 className="font-bold text-primary text-lg mb-2">Right Job For You</h2>
          <p className="text-lg font-light text-secondary mb-4">Myfuse's comprehensive platform is
            <br/>designed to help you discover <br/>the right job for you.</p>

        </div>
      </div>
    </>
  )
}

export default JobFuseModel