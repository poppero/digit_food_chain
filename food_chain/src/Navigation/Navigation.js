import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React, { useContext, useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AssistantModalContext, ChangingComponentsContext, LoginContext } from '../Api/ContextApi.js'
import { CartContext } from '../Api/ProductsApi.js'
import AssistantModal from '../Assistant/AssistantModal.js'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Navigation = (props) => {
    const [selectedPage , setSelectedPage] = useContext(ChangingComponentsContext)
    const [cart , setCart] = useContext(CartContext)
    const [status , setStatus] = useContext(LoginContext)
    console.log(status)
  return (
    <div className='absolute   z-20 backdrop-blur-lg  flex flex-row justify-between p-2 w-screen items-center'>
        
        <div className='w-1/3 '>
        <Link to="/"><img className='w-[20rem]' src='http://localhost:3000/logo-transparent.png'/></Link>
        </div>
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <SearchBar />
        
        <div className='flex flex-row m-4'>
        {(cart.length === 0 || status !== "Login success." ) ? null : <span className=' relative -top-3 items-center z-10 -right-10 bg-red-500 w-6 h-6 flex justify-center text-white font-poppins align-middle text-[0.8rem] font-bold rounded-full'>{cart.length}</span>}
        <Link to="/" ><BsCart onClick={() => setSelectedPage("cart")} className='text-white text-2xl  cursor-pointer'/></Link>
        </div>
        
      
        
    </div>
  )
}

export default Navigation