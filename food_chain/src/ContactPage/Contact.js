import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const Contact = () => {
    return (
        <div class="w-[80vh] h-[60vh] mb-[5rem] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-col justify-between">
            <div className='flex flex-row  gap-6 p-6 w-2/3'>
                <AiOutlinePhone size={40} className='text-white p-1 border-[0.1rem] rounded-full' />
                <div className='flex flex-col gap-2'>
                    <div className='font-raleway text-white font-semibold flex flex-col'>
                        <h1 className=''>Phone</h1>
                        <h1>+38977-924/944</h1>
                    </div>
                    <div className='font-raleway font-semibold text-white flex flex-col'>
                        <h1>Fax</h1>
                        <h1>047-52/4447</h1>
                    </div>

                </div>
            </div>
            <div className='flex flex-row   gap-4 w-2/3 p-6'>
                <AiOutlineMail size={40} className='text-white p-1 border-[0.1rem] rounded-full' />
                <div className='flex flex-col gap-2'>
                    <div className='font-raleway font-semibold text-white flex flex-col'>
                        <h1>Mail</h1>
                        <h1>steakhouse@digit.com</h1>
                    </div>
                  

                </div>
            </div>
            <div className='flex flex-row  gap-4 w-2/3 p-6'>
                <CiLocationOn size={40}  className='text-white p-1 border-[0.1rem] rounded-full' />
                <div className='flex flex-col gap-2'>
                    <div className='font-raleway text-white font-semibold flex flex-col'>
                        <h1>Address</h1>
                        <h1>Blvd. Partizanski Odredi, Skopje 1000</h1>
                    </div>
                  
                </div>
            </div>
            <h1 className='font-raleway text-white text-center p-2'>since 2022 &copy; DIGIT STEAK HOUSE</h1>
        </div>
    )
}

export default Contact