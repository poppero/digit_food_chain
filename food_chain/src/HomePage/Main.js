import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-full fixed gap-1 bg-black flex flex-col items-center justify-center overflow-hidden '>
        <h1 className='font-raleway italic text-white text-2xl'>TASTY AND CRUNCHY</h1>
        <h1 className='font-poppins text-white text-[6rem]'>STEAK HOUSE DIGIT</h1>
        <p className='font-raleway text-white text-xl'>Most restaurant marketing is targeted at getting new diners–missing the opportunity to build loyalty with past and current ones. </p>
        <button className='text-white font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-slate-700'>ORDER NOW</button>
        </div>
  )
}

export default Main