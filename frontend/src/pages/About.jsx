import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl text-green-600'>
        <p >About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex justify-center flex-col md:flex-row gap-6'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam eligendi dolorum commodi in inventore magni nostrum beatae tempore, ut ullam assumenda adipisci obcaecati, fugit vero ab tempora blanditiis. Aspernatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vitae quod at aliquam ipsum rerum ipsam exercitationem laboriosam voluptatum cumque esse similique amet molestias id repellendus itaque harum quas recusandae.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto temporibus natus incidunt accusamus reiciendis eius doloribus voluptatem, quae omnis. Excepturi tenetur reprehenderit facilis, vitae fuga ad illum ipsam vero quam cupiditate nostrum quo saepe alias, cumque eum quia? Repudiandae!</p>
        </div>
      </div>
      <div className='flex flex-col justify-center mx-16'>
      <div className='w-full text-xl my-2 flex justify-start'>
        <p>WHY <span className='text-gray-600 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='w-full my-10 flex justify-center flex-col md:flex-row gap-6'>
        <div className='border p-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white duration-300 transition-all text-gray-700 cursor-pointer'>
          <p>Efficiency:</p>
          <b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, soluta.</b>
        </div>
        <div className='border p-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white duration-300 transition-all text-gray-700 cursor-pointer'>
          <p>Convenience:</p>
          <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, autem?</b>
        </div>
        <div className='border p-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white duration-300 transition-all text-gray-700 cursor-pointer'>
          <p>Personalization:</p>
          <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perferendis.</b>
        </div>
      </div>  
      </div>
    </div>
  )
}

export default About
