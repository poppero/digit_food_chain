import React from 'react'

const OneProduct = props => {
  return (
    <div class="w-2/3 h-[70vh] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-row items-center p-10">
    <img className='w-1/3 h-[40vh]' src='http://localhost:3000/steakplate.png' />
    <div className='flex flex-col w-full justify-center'>
    <h1 className='font-raleway text-white text-3xl'>{props.name}</h1>
    <h1>Ingredients </h1>
    </div>
  </div>
  )
}

export default OneProduct