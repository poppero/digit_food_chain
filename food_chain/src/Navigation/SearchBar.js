import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import SearchList from './SearchList'

const SearchBar = () => {
  const [searchExpanded , setSearchExpanded] = useState(false)
  const [search , setSearch] = useState("")
  const handleChange = e => {
    setSearch({[e.target.name] : e.target.value})
  }
  return (
    <div className='flex flex-row items-center gap-2 p-2 w-1/3 justify-end mr-3'>
        <AiOutlineSearch className=' text-white' size={25}/>
        <input onChange={e => setSearch(e)} value={search} name='search' className='font-raleway  bg-transparent border-b-[0.1rem] text-md  w-2/3 text-white outline-none p-1 ' type="text" placeholder="Search" />
        {searchExpanded === true ? 
          <SearchList />
         
        : null}
    </div>
  )
}

export default SearchBar