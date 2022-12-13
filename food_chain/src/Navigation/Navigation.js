import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Navigation = (props) => {

  return (
    <div className='backdrop-blur-lg flex flex-row justify-between p-2 w-screen items-center'>
        
        <div className='w-1/3'>
        <img className='w-[20rem]' src='http://localhost:3000/logo-transparent.png'/>
        </div>
        <NavBar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
        <SearchBar />
        
    </div>
  )
}

export default Navigation