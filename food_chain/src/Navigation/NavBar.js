import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row gap-10 justify-center p-4 w-1/3' >
      <h1 className='lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 cursor-pointer text-lg rounded-md hover:bg-slate-800 p-2 font-poppins text-white'>HOME</h1>
      <h1 className='lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 cursor-pointer text-lg rounded-md hover:bg-slate-800 p-2 font-poppins text-white'>MENU</h1>
      <h1 className='lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 cursor-pointer text-lg rounded-md hover:bg-slate-800 p-2 font-poppins text-white'>ABOUT</h1>
      <h1 className='lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 cursor-pointer text-lg rounded-md hover:bg-slate-800 p-2 font-poppins text-white'>CONTACT</h1>  
    </div>
  )
}

export default NavBar