import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ChangingComponentsContext, LoginContext } from '../Api/ContextApi'


const Main = () => {
  const [status , setStatus] = useContext(LoginContext)
  const [selectedPage , setSelectedPage] = useContext(ChangingComponentsContext)
  return (
    <div className='w-full h-full fixed z-10 gap-1  flex flex-col items-center justify-center overflow-hidden  '>
         <h1 className='font-raleway italic  text-white text-xl'>Your culinary adventure awaits you at</h1>
        <h1 className='font-poppins text-white text-[6rem]'>STEAK <span className='text-yellow-500'>HOUSE</span> DIGIT</h1>
        <p className='font-raleway text-white text-xl'>Where every ingredient tells a story..</p> 
        
        {status === "Login success." ?
        <button onClick={e => setSelectedPage("menu")} className='text-white font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-white hover:text-black font-semibold'>ORDER NOW</button>
        :
        <Link to="/login"><button className='text-white font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-white hover:text-black font-semibold'>LOGIN TO ORDER NOW</button></Link>
        }
       
        </div>
  )
}

export default Main