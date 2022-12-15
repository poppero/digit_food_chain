import React, { useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { CartContext, ProductContext } from '../Api/ProductsApi'
import {useSpeechSynthesis} from 'react-speech-kit'

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    const [products, setProducts] = useContext(ProductContext)
    const {speak} = useSpeechSynthesis()
    const text = "Your cart have pepperoni pizza , portabello steak and one baklava. Total price for this order is 315 dollars.   Do you accept this order? " 
    console.log(cart.filter(c => c.product_id))
    console.log( products.filter(p => p.id))
    return (
        <div class="w-[100vh] h-[60vh] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-col items-center ">
           <h1 className='font-raleway text-white text-3xl text-center p-4'>Cart items</h1>
            <div className='w-full h-2/3 overflow-y-scroll'>
                {cart.map(c => <div className='flex flex-row w-full justify-between items-center gap-1 p-6  '>
                    <img className='w-[9rem]' src={products.find(p => p.id === c.product_id).image_path} />
                    <h1 className='font-poppins text-white text-2xl'>{products.find(p => p.id === c.product_id).name}</h1>

                    <div className='flex flex-col  items-center'>
                        <div className='flex flex-row gap-4 font-raleway text-white text-2xl font-semibold'>
                            <h1 className='text-3xl cursor-pointer'>-</h1>
                            <h1>{c.quantity}</h1>
                            <h1 className='text-3xl cursor-pointer'>+</h1>
                        </div>
                        <h1 className='font-poppins text-white'>quantity</h1>
                    </div>
                  <div className='flex flex-col  items-center'>
                  <AiOutlineDelete className='text-white text-3xl '/>  
                  <h1 className='font-poppins text-white'>delete item</h1>
                    </div>
                </div>)}
            </div>
            <button onClick={() => speak({text : text})} className='outline-none text-white w-1/3 font-poppins border-[0.1rem] p-3 mt-6 lg:transition lg:ease-in-out lg:delay-100  lg:hover:-translate-y-1 lg:hover:scale-110 hover:bg-white hover:text-black font-semibold'>CHECKOUT</button>
            
        </div>
    )
}

export default Cart