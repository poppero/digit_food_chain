import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className='flex flex-row items-center gap-2 p-2 w-1/3 justify-end mr-3'>
        <AiOutlineSearch className=' text-white' size={25}/>
        <input className='font-raleway  bg-transparent border-b-[0.1rem] text-md  w-2/3 text-white outline-none p-1 ' type="text" placeholder="Search" />
    </div>
  )
}

export default SearchBar