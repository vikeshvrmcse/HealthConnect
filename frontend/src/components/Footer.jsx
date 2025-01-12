import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ----------------left section--------------  */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt odit sit quaerat soluta ipsam, fugiat assumenda accusamus eligendi provident? Enim vel perferendis nihil error officia praesentium repellat minima provident?</p>
        </div>
        {/* ----------------center section--------------  */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* ----------------right section--------------  */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+123 544443 434343</li>
                <li>@sumit.lauda.gap.hupahup.com</li>
            </ul>
        </div>
        
      </div>
      {/* copyright */}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>@copyright.porn.hub.com</p>
        </div>
    </div>
  )
}

export default Footer
