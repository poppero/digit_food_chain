import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Main = () => {
  return (
    <div className='w-full h-full fixed gap-1  flex flex-col items-center justify-center overflow-hidden  '>
        <h1 className='font-raleway italic font-semibold text-white text-2xl'>TASTY AND CRUNCHY</h1>
        <h1 className='font-poppins text-white text-[6rem]'>STEAK <span className='text-yellow-500'>HOUSE</span> DIGIT</h1>
        <p className='font-raleway text-white text-xl'>Most restaurant marketing is targeted at getting new diners–missing the opportunity to build loyalty with past and current ones. </p>
        <Link to="/login"><button className='text-white font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-white hover:text-black font-semibold'>ORDER NOW</button></Link>
        </div>
  )
}

export default Main