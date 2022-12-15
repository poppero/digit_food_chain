import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import SearchList from './SearchList'

const SearchBar = () => {
  const [searchExpanded , setSearchExpanded] = useState(true)
  const [search , setSearch] = useState("")
  const handleInput = e => {
    var lowerCase = e.target.value.toLowerCase()
    setSearch(lowerCase)
  }
  return (
    <div className='flex flex-row items-center gap-2 p-2 w-1/3 justify-end mr-3'>
        <AiOutlineSearch className=' text-white' size={25}/>
        <input  onChange={handleInput} className='font-raleway  bg-transparent border-b-[0.1rem] text-md  w-2/3 text-white outline-none p-1 ' type="text" placeholder="Search" />
        {searchExpanded === true ? 
          <SearchList search={search}/>
         
        : null}
    </div>
  )
}

export default SearchBar