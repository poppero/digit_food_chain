import React from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import OneProduct from './OneProduct'

const ProductDetails = () => {
    const {name} = useParams() 
  return (
    <div className="h-screen w-screen bg-cover overflow-hidden opacity-80   bg-[url('http://localhost:3000/background.jpg')] ">
    <Navigation />
     <div className='h-screen w-screen z-10 backdrop-blur-lg flex flex-col justify-center items-center overflow-x-hidden'>
        <OneProduct  name={name}/>
       
     </div>
   </div>
  )
}

export default ProductDetails