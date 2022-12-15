import React, { useContext, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { AssistantModalContext, ChangingComponentsContext } from '../Api/ContextApi'

const NavBar = (props) => {
  const reg_class = "lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 cursor-pointer text-lg  hover:border-b-[0.1rem] p-2 font-raleway text-white"
  const selected_class = "scale-110 cursor-pointer text-lg  border-b-[0.1rem] p-2 font-raleway text-white"
  const [selectedPage , setSelectedPage] = useContext(ChangingComponentsContext)
  const location = useLocation();
  const [assistant , setAssistant] = useContext(AssistantModalContext)

  console.log(selectedPage)
  // console.log(location)
  return (
    <div className='flex flex-row gap-12 justify-center p-4 w-1/3 items-center' >
      {location.path !== "/" ?
      <Link to="/"><h1 onClick={e => setSelectedPage("home")} className={selectedPage == "home" ? selected_class : reg_class}>HOME</h1></Link>
    :
    <h1 onClick={e => setSelectedPage("home")} className={selectedPage == "home" ? selected_class : reg_class}>HOME</h1>
    }
    {location.path !== "/" ?
      <Link to="/"><h1 onClick={e => setSelectedPage("menu")}    className={selectedPage == "menu" ? selected_class : reg_class}>MENU</h1></Link>
    :
    <h1 onClick={e => setSelectedPage("menu")}    className={selectedPage == "menu" ? selected_class : reg_class}>MENU</h1>
    }
    <div onClick={e => setSelectedPage("assistant")} className='cursor-pointer flex flex-col gap-2 items-center justify-center p-1'>
        <img src='http://localhost:3000/asistent.png' className="w-[3rem] p-1  border-[0.1rem] border-white rounded-full animate-bounce" />
        <h1 className='font-raleway text-white  '>ASSISTANT</h1>
        </div>
    {location.path !== "/" ?
      <Link to="/"><h1 onClick={e => setSelectedPage("about")}   className={selectedPage == "about" ? selected_class : reg_class}>ABOUT</h1></Link>
    :
    <h1 onClick={e => setSelectedPage("about")}   className={selectedPage == "about" ? selected_class : reg_class}>ABOUT</h1>
    }
    {location.path !== "/" ?
      <Link to="/"><h1 onClick={e => setSelectedPage("contact")} className={selectedPage == "contact" ? selected_class : reg_class}>CONTACT</h1></Link>
    :
    <h1 onClick={e => setSelectedPage("contact")} className={selectedPage == "contact" ? selected_class : reg_class}>CONTACT</h1>
    }
      
      
        
      
    </div>
  )
}

export default NavBar