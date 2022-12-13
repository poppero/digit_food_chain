import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Navigation = (props) => {

  return (
    <div className='absolute z-10 backdrop-blur-lg  flex flex-row justify-between p-2 w-screen items-center'>
        
        <div className='w-1/3 '>
        <img className='w-[20rem]' src='http://localhost:3000/logo-transparent.png'/>
        </div>
        <NavBar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
        <SearchBar />
        <img src='https://cdn-icons-png.flaticon.com/512/147/147142.png' className='w-[3rem] mr-4 border-[0.1rem] border-white rounded-full' />
        
    </div>
  )
}

export default Navigation