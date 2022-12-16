import React from 'react'
import Footer from '../HomePage/Footer'
import Navigation from '../Navigation/Navigation'
import Cart from './Cart'

const CartPage = () => {
  return (
    <div className="h-screen w-screen  flex flex-col items-center  bg-cover   overflow-hidden opacity-80   bg-[url('http://localhost:3000/background.jpg')] ">
    <Navigation />
    <div className='backdrop-blur-lg w-screen h-screen flex justify-center items-center'>
    <Cart />
    </div>
     <Footer />
    </div>
  )
}

export default CartPage