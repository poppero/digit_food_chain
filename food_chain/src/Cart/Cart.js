import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineCheckSquare, AiOutlineDelete } from 'react-icons/ai'
import { CartContext, ProductContext } from '../Api/ProductsApi'
import { useSpeechSynthesis } from 'react-speech-kit'
import { BsCheckSquare , BiSquare } from 'react-icons/bs'
import {BiSquareRounded } from 'react-icons/bi'
import { CiHeadphones } from 'react-icons/ci'
import AssistantOrder from './AssistantOrder'


const Cart = () => {
    const [clicked , setClicked] = useState(1)
    const [proceed , setProceed] = useState(false)
    const [cart, setCart] = useContext(CartContext)
    const [products, setProducts] = useContext(ProductContext)
    const { speak , cancel } = useSpeechSynthesis()
    const allPrices = cart.map(c => products.find(p => p.id === c.product_id).price * cart.find(c => c.id).quantity)
    const sum = allPrices.reduce((sumOf, price) => {
        return sumOf + price
    }, 0)
    const handleDelete = (e) => {
        e.preventDefault()
        setCart(cart.filter(item => item.id !== clicked))
    }
    const text = "Your cart have " + cart.map(c => products.find(p => p.id === c.product_id).name) + ". Total price for this order is  " + sum + "dollars . Do you accept this order? "
    
    return (
        <div class="w-[100vh] h-[60vh] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-col items-center ">

            {proceed === true ? 
            <AssistantOrder  setProceed={setProceed}/>
            :
            <div className='w-full h-full flex flex-col items-center'>
                        <h1 className='font-raleway text-white text-3xl text-center p-4'>Cart items</h1>
            <div className='w-full h-2/3 overflow-y-scroll'>
                
                {cart.map(c => <div className='flex flex-row w-full justify-between items-center gap-1 p-6  '>
                   <div className='flex flex-row items-center gap-2 text-xl'>
                  {clicked === c.id ? 
                  <AiOutlineCheckSquare className='text-white text-2xl' />
                  :
                  <BiSquareRounded onClick={() => setClicked(c.id)} className='text-white text-2xl'/>
                  }
                    <img className='w-[9rem]' src={products.find(p => p.id === c.product_id).image_path} />
                    </div>
                    <h1 className='font-poppins text-white text-2xl'>{products.find(p => p.id === c.product_id).name + " x " + c.quantity}</h1>

                
                    <div onClick={handleDelete}  className='flex flex-col  items-center cursor-pointer'>
                        <AiOutlineDelete className='text-white text-3xl ' />
                        <h1  className='font-poppins text-white'>delete item</h1>
                    </div>
                </div>)}
            </div>
            <button onClick={() => {setProceed(true) ;speak({text : text})}} className='outline-none text-white w-1/3 font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-white hover:text-black font-semibold'>CHECKOUT</button>
            </div>}
            

        </div>
    )
}

export default Cart