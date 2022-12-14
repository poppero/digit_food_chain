import React, { useContext, useEffect, useState } from 'react'
import {BsMic } from 'react-icons/bs'
import { Navigate } from 'react-router-dom'
import SpeechRecognition , { useSpeechRecognition } from 'react-speech-recognition'
import { AssistantModalContext, VoiceControlContext } from '../Api/ContextApi'
import { useSpeechSynthesis } from 'react-speech-kit'

const AssistantModal = () => {
    const assistantSpeak = 'Hello ! How can I help you?'
    const {speak} = useSpeechSynthesis()
    const [assistant , setAssistantModal] = useContext(AssistantModalContext)
    const redirect = useContext(VoiceControlContext )
    const [redirectUrl , setRedirectUrl] = useState("")
  const commands = [
    {
      command: ["Go to *" , "Show the *"],
      callBack: (redirectPage) => setRedirectUrl(redirectPage)
    }
  ]
  const pages = ["home" , "login"]
  const urls = {
    home: "/",
    login: "/login"
  }

  if(redirectUrl){
    if(pages.includes(redirectUrl)){
        redirect = <Navigate to={urls[redirectUrl]} />
    }
    else{
        redirect = <p>I don't understan.</p>
    }
  }
  
  console.log(redirectUrl)
  const {transcript} = useSpeechRecognition({commands})
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () =>
        document.body.style.overflow = 'unset';
}, [])
  return (
    <div className=' h-screen w-screen absolute z-30   flex items-center justify-center overflow-y-hidden '  style={{ "backgroundColor": "rgba(0,0,0,0.90)" }}>
            <div className="w-[80vh] h-[60vh] mb-[5rem] bg-white bg-opacity-50 backdrop-blur-lg rounded drop-shadow-lg flex flex-col justify-between">
      <h1 className=' text-white font-raleway text-center p-4 font-semibold  text-2xl '>DIGIT VIRTUAL ASSISTANT</h1>
      <div className='flex flex-col gap-1 p-6 items-center'>
      <img src='http://localhost:3000/asistent.png' className='w-[8rem] ' />
      <p className='font-raleway text-center text-white text-lg '>Hello my name is Digit !</p>
      <p className='font-raleway text-center text-white text-lg '>You can use me as a guide through this website</p>
      <p className='font-raleway text-center text-slate-300 text-lg '>example ('Say Login')</p>
      <p className='text-white font-raleway'>You: {transcript === "login" ? <Navigate to='/login' /> : null}</p>
      <BsMic onClick={SpeechRecognition.startListening} className='text-white text-3xl mt-4' />
      </div>
      <h1 onClick={e => setAssistantModal(false)} className='font-poppins text-white text-center p-2'>close</h1>
    </div>
            </div>
  )
}

export default AssistantModal