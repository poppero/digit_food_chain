import React, { useContext, useEffect, useState } from 'react'
import { BsMic } from 'react-icons/bs'
import { Navigate } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { AssistantModalContext, ChangingComponentsContext, VoiceControlContext } from '../Api/ContextApi'
import { useSpeechSynthesis } from 'react-speech-kit'

const AssistantModal = () => {
  const [selectedPage, setSelectedPage] = useContext(ChangingComponentsContext)
  const { transcript } = useSpeechRecognition()
  const str = transcript
  const split = str.split(' ')
 
  const lastWord = split[split.length - 1]

  return (
    <div className=' w-[100vh] h-[60vh] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-col justify-around '  >

      <h1 className=' text-white font-raleway text-center p-4 font-semibold  text-2xl '>DIGIT VIRTUAL ASSISTANT</h1>
      <div className='flex flex-col gap-1 p-6 items-center'>
        <img src='http://localhost:3000/asistent.png' className='w-[8rem] ' />
        <p className='font-raleway text-center text-white text-lg '></p>
        <p className='font-raleway text-center text-white text-lg '>I'm listening for your commands!</p>
        <p className='font-raleway text-center text-slate-300 text-lg '>Say ('Show the menu')</p>
        <p className='text-white font-raleway'>You: {transcript}</p>
        {lastWord === "login" ? <Navigate to="/login" /> : null}
        {lastWord === "menu" || lastWord === "about" || lastWord == "contact" || lastWord === "home" || lastWord === "cart" ? <Navigate to="/" /> && setSelectedPage(lastWord) : null}
        <BsMic size={40} onClick={SpeechRecognition.startListening} className='text-white hover:bg-slate-400 cursor-pointer  mt-4 border-[0.1rem] border-white rounded-full p-1' />
      </div>


    </div>
  )
}

export default AssistantModal