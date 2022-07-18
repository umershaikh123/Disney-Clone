import React from 'react'
import logo from './img/logo.svg';
const Footer = () => {
  return (
    <div className=' bg-black  text-gray-300 flex flex-col'>

   <img src={logo} alt='logo' className=' h-12 mt-4' />

 
    <div className='w-full-screen  space-x-5   flex text-xs mt-4 flex-wrap justify-center items-center '>
 
        <div>Privicy Policy </div>
        <div>Subscriber Event</div>
        <div>Help </div>
        <div>Collection Statement</div>
        <div>About Us </div>
        <div>Contact Us </div>
        <div>Interest Based Ads </div>

        
      
    </div>

    <div  className=' mt-6 pb-5' >© Disney. All rights reserved.</div>
 

    </div>
  )
}

export default Footer