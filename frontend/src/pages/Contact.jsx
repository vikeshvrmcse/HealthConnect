import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl text-green-600'>
        <p >Contact <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex justify-center flex-col md:flex-row gap-6'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam eligendi dolorum commodi in inventore magni nostrum beatae tempore, ut ullam assumenda adipisci obcaecati, fugit vero ab tempora blanditiis. Aspernatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vitae quod at aliquam ipsum rerum ipsam exercitationem laboriosam voluptatum cumque esse similique amet molestias id repellendus itaque harum quas recusandae.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto temporibus natus incidunt accusamus reiciendis eius doloribus voluptatem, quae omnis. Excepturi tenetur reprehenderit facilis, vitae fuga ad illum ipsam vero quam cupiditate nostrum quo saepe alias, cumque eum quia? Repudiandae!</p>
        </div>

      </div>

      <div className='px-10'>
      <div className='w-full my-10 bg-gray-300 text-gray-800 flex justify-center flex-col md:flex-row gap-6'>
        <div className='border p-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]'>
          <p className='font-semibold text-2xl'>OUR OFFICE</p>
          <p className='text-gray-700'><span className='text-gray-800 font-semibold text-lg'>Address </span><br/>67-BD NEAR, HAWA MAHAL BHAWANI SINGH HALL,<br/>VERMAN ROAD NAGRA BALLIA UTTAR PRADESH</p>
          
          <p className='text-gray-700'><span className='text-gray-800 font-semibold text-lg'>Contact </span><br/><span><b>Tel : </b></span> 555-453 <br/><b>Email : </b>helthconnect@viswas.finish</p>
          
          <p><span className='font-semibold text-lg py-4'>CARRIER AT HELTH CONNECT</span><br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, debitis aspernatur repellendus quae perferendis hic dignissimos impedit quas veniam non ullam doloremque. Fugit totam ducimus quae eius, accusantium repellendus est omnis iste corporis temporibus harum ab autem incidunt ut ex officia. Est aut, consequatur iusto voluptas possimus non ad error. </p>
          <button className='rounded-full text-white-gray-850 text-2xl hover:text-green-500 border border-gray-800 p-3 hover:bg-gray-950 duration-300 transition-all cursor-pointer'>Explor's jobs</button>
        </div>
        
      </div>
        </div>  
    </div>
  )
}

export default Contact
