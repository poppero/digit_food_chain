import React, { useState } from 'react'

const NavBar = (props) => {
  const reg_class = "lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 cursor-pointer text-lg  hover:border-b-[0.1rem] p-2 font-raleway text-white"
  const selected_class = "scale-110 cursor-pointer text-lg  border-b-[0.1rem] p-2 font-raleway text-white"
  
  return (
    <div className='flex flex-row gap-10 justify-center p-4 w-1/3' >
      <h1 onClick={e => props.setSelectedPage("home")} className={props.selectedPage == "home" ? selected_class : reg_class}>HOME</h1>
      <h1 onClick={e => props.setSelectedPage("menu")}    className={props.selectedPage == "menu" ? selected_class : reg_class}>MENU</h1>
      <h1 onClick={e => props.setSelectedPage("about")}   className={props.selectedPage == "about" ? selected_class : reg_class}>ABOUT</h1>
      <h1 onClick={e => props.setSelectedPage("contact")} className={props.selectedPage == "contact" ? selected_class : reg_class}>CONTACT</h1>  
    </div>
  )
}

export default NavBar