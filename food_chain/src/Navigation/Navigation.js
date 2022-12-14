import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AssistantModalContext } from '../Api/ContextApi.js'
import AssistantModal from '../Assistant/AssistantModal.js'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Navigation = (props) => {
    const [assistant , setAssistant] = useContext(AssistantModalContext)
  return (
    <div className='absolute z-10 backdrop-blur-lg  flex flex-row justify-between p-2 w-screen items-center'>
        
        <div className='w-1/3 '>
        <Link to="/"><img className='w-[20rem]' src='http://localhost:3000/logo-transparent.png'/></Link>
        </div>
        <NavBar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
        <SearchBar />
        <div onClick={e => setAssistant(true)} className='cursor-pointer flex flex-col gap-1 items-center justify-center p-1'>
        <img src='http://localhost:3000/asistent.png' className='w-[3rem] p-1  border-[0.1rem] border-white rounded-full' />
        <h1 className='font-poppins text-white '>Assistant</h1>
        </div>
      
        
    </div>
  )
}

export default Navigation