import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const Contact = () => {
    return (
        <div class="w-[100vh] h-[60vh]  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-row justify-around">
            <div className='w-1/2 h-full flex flex-col justify-center items-center'>
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
                    <CiLocationOn size={40} className='text-white p-1 border-[0.1rem] w-[3.2rem] rounded-full' />
                    <div className='flex flex-col gap-2'>
                        <div className='font-raleway text-white font-semibold flex flex-col'>
                            <h1>Address</h1>
                            <h1>Blvd. Partizanski Odredi, Skopje 1000</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-1/2 '>
                <div className='flex flex-col gap-2'>
                    <div className='font-raleway font-semibold text-white flex flex-col'>
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="380" height="400" id="gmap_canvas" src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sskopje!6i13" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe></div></div>
                    </div>

                </div>
            </div>

            {/* <h1 className='font-raleway text-white text-center p-2'>since 2022 &copy; DIGIT STEAK HOUSE</h1> */}
        </div>
    )
}

export default Contact