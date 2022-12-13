import React from 'react'
import Login from './Login'

const LoginPage = () => {
  return (
    <div className="h-screen w-screen  flex justify-center items-center  bg-cover   overflow-hidden opacity-80   bg-[url('http://localhost:3001/background.jpg')] ">
    <div className='backdrop-blur-lg w-screen h-screen flex justify-center items-center'>
    <Login />
    </div>
     
    </div>
  )
}

export default LoginPage