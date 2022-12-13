import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CurrentUserContext, UserContext } from '../Api/ContextApi'

const Login = () => {
    const [users , setUsers] = useContext(UserContext)
    const [status , setStatus] = useState("")
    const [currentUser , setCurrentUser] = useContext(CurrentUserContext)
    const [login , setLogin] = useState({
        email : "",
        password : ""
    })
   const handleLogin = e => {
    e.preventDefault()
    const cur_user = users.find(u => (u.email === login.email && u.password === login.password))
    if (cur_user === undefined) {
        setStatus("Incorrect email or password")
    }
    else {
        setStatus("Login success.")
    }
   }

   const handleChange = e => {
    setStatus("")
    setLogin({...login , [e.target.name] : e.target.value})
   }
    console.log(login.email)
  return (
    <form onSubmit={handleLogin} onChange={handleChange} className="w-[80vh] h-[60vh] mb-[5rem] bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg flex flex-col justify-between items-center">
     <img className='w-[30rem]' src='http://localhost:3001/logo-transparent.png'/>
      <div className='flex flex-col gap-4 w-full justify-center items-center'>
        <input value={login.email} name='email' type="text" className='border-b-[0.1rem] border-white bg-transparent text-white font-raleway placeholder:text-white placeholder:font-semibold p-4 outline-none w-2/3' placeholder="email" />
        <input value={login.password} name='password' type="password" className='border-b-[0.1rem] border-white bg-transparent text-white font-raleway placeholder:text-white placeholder:font-semibold p-4 outline-none w-2/3' placeholder="password" />
        {status === "Login success." ? <h1 className='font-raleway text-green-400 font-bold'>Login success</h1> : <h1 className='font-raleway text-red-500 font-bold'>Incorrect email or username</h1>}
        <button className='text-white font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-white hover:text-black font-semibold w-1/4'>LOGIN</button>
      </div>
      {status === "Login success." ? <Navigate to="/" /> : null}
      <h1 className='font-raleway text-white text-center p-2'>since 2022 &copy; DIGIT STEAK HOUSE</h1>
    </form>
  )
}

export default Login