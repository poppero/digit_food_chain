import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Navigation = () => {
  return (
    <div className='flex flex-row justify-between p-2 w-screen items-center'>
        
        <div className='w-1/3'>
        <img className='w-[20rem]' src='http://localhost:3001/logo.png'/>
        </div>
        <NavBar />
        <SearchBar />
        
    </div>
  )
}

export default Navigation