import React, { useContext, useState } from 'react'
import About from '../AboutPage/About'
import { AssistantModalContext, ChangingComponentsContext } from '../Api/ContextApi'
import AssistantModal from '../Assistant/AssistantModal'
import Contact from '../ContactPage/Contact'
import Menu from '../MenuPage/Menu'
import Navigation from '../Navigation/Navigation'
import Footer from './Footer'
import Main from './Main'

const ImageBackground = () => {
    const [selectedPage ,setSelectedPage] = useContext(ChangingComponentsContext)
    
    const components = {
        home : <Main />,
        about : <About />,
        contact : <Contact />,
        menu : <Menu />,
        assistant : <AssistantModal />
    }
  return (
    <div className="h-screen bg-cover overflow-hidden opacity-80   bg-[url('http://localhost:3000/background.jpg')] ">
     <Navigation selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className='h-screen z-10 backdrop-blur-lg flex flex-col justify-center items-center overflow-x-hidden'>
        {components[selectedPage]}
      </div>
     <Footer />
    </div>
  )
}

export default ImageBackground