import React, { useContext, useState } from 'react'
import About from '../AboutPage/About'
import { AssistantModalContext } from '../Api/ContextApi'
import AssistantModal from '../Assistant/AssistantModal'
import Contact from '../ContactPage/Contact'
import Menu from '../MenuPage/Menu'
import Navigation from '../Navigation/Navigation'
import Main from './Main'

const ImageBackground = () => {
    const [selectedPage , setSelectedPage] = useState("home")
    const [assistant , _] = useContext(AssistantModalContext)
    console.log(assistant)
    const components = {
        home : <Main />,
        about : <About />,
        contact : <Contact />,
        menu : <Menu />
    }
  return (
    <div className="h-screen bg-cover overflow-hidden opacity-80   bg-[url('http://localhost:3000/background.jpg')] ">
     <Navigation selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className='h-screen z-10 backdrop-blur-lg flex flex-col justify-center items-center overflow-x-hidden'>
        {components[selectedPage]}
        {assistant === true ? <AssistantModal /> : null}
      </div>
    </div>
  )
}

export default ImageBackground