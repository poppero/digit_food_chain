import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AssistantModalContext, ChangingComponentsContext } from '../Api/ContextApi.js'
import AssistantModal from '../Assistant/AssistantModal.js'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Navigation = (props) => {
    const [selectedPage , setSelectedPage] = useContext(ChangingComponentsContext)
    
    console.log(selectedPage)
  return (
    <div className='absolute   z-20 backdrop-blur-lg  flex flex-row justify-between p-2 w-screen items-center'>
        
        <div className='w-1/3 '>
        <Link to="/"><img className='w-[20rem]' src='http://localhost:3000/logo-transparent.png'/></Link>
        </div>
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <SearchBar />
        
      
        
    </div>
  )
}

export default Navigation