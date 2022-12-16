import React, { useContext, useEffect } from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'
import { ChangingComponentsContext } from '../Api/ContextApi'

const AssistantOrder = (props) => {
    const {speak} = useSpeechSynthesis()
    const decline_text = "Your order is cancelled"
    const accept_text = "Thank you for your order"
    const [selectedPage , setSelectedPage] = useContext(ChangingComponentsContext)

  return (
    <div  className='w-full h-full flex flex-col items-center justify-center gap-4'>
                    <img src='http://localhost:3000/asistent.png' className='w-[8rem] ' />
                    <h1 className='text-white font-raleway font-semibold text-xl'>wait virtual assistant is speaking...</h1>
                   <div className='flex flex-row gap-10 w-full items-center justify-center'>
                   <button onClick={() => {setSelectedPage("menu") ; speak({text : accept_text})}} className='outline-none text-white w-1/3 font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-emerald-400 hover:text-white font-semibold'>ACCEPT</button>
                    <button onClick={() => {props.setProceed(false) ; speak({text : decline_text})} }  className='outline-none text-white w-1/3 font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-red-400 hover:text-white font-semibold'>DECLINE</button>
                    </div>        
            </div>
  )
}

export default AssistantOrder