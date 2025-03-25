import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className='p-4 md:p-8'>
      <h2 className='text-xl font-bold text-gray-800 mb-6'>My Appointments</h2>

      <div className='grid gap-6'>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200'
          >
            {/* Doctor Image */}
            <div className='w-full md:w-1/3 flex justify-center p-4'>
              <img
                className='w-28 h-28 md:w-36 md:h-36 object-cover rounded-full border-4 border-gray-300 shadow-sm'
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Doctor Details */}
            <div className='flex-1 p-4 text-gray-700'>
              <h3 className='text-lg font-semibold'>{item.name}</h3>
              <p className='text-sm text-gray-500'>{item.speciality}</p>
              <div className='mt-2'>
                <p className='font-medium'>Address:</p>
                <p className='text-sm'>{item.address.line1}</p>
                <p className='text-sm'>{item.address.line2}</p>
              </div>
              <p className='mt-2 text-sm'>
                <span className='font-medium'>Date & Time:</span> 25 July, 2025 | 8:30 PM
              </p>
            </div>

            {/* Buttons */}
            <div className='p-4 flex flex-col md:flex-row gap-2 justify-center md:justify-end md:items-center'>
              <button className='bg-green-500 hover:bg-green-700 text-white text-sm py-2 px-4 rounded-lg w-full md:w-24 transition-all'>
                Pay
              </button>
              <button className='bg-red-500 hover:bg-red-700 text-white text-sm py-2 px-4 rounded-lg w-full md:w-24 transition-all'>
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
