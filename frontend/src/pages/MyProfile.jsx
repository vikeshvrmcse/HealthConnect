import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Vikesh Kumar Verma",
    image: assets.profile_pic,
    email: 'vikesh@gov.sycsys',
    phone: '+91 9878768999',
    address: {
      line1: 'AS building room no 45, Sita Road, Siwan Laj',
      line2: 'BLW Rajwada Maugapur Hotel, near Lund Khale Dhaba, Bareilly U.P'
    },
    gender: 'Male',
    dob: '2002/04/21'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="container mx-auto px-4">
      {/* Responsive Grid */}
      <div className='grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-y-6 md:gap-x-5 mt-4 text-neutral-700'>

        {/* Profile Section */}
        <div className='max-w-lg flex flex-col gap-4 text-sm'>
          <img className='w-24 sm:w-36 md:w-48 lg:w-56 rounded mx-auto' src={userData.image} alt="Profile" />

          {isEdit ? (
            <input
              className='bg-gray-300 text-2xl font-medium w-full px-3 py-2 rounded'
              type='text'
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
            />
          ) : (
            <p className='text-2xl text-gray-800 font-semibold text-center'>{userData.name}</p>
          )}

          <hr className='bg-green-950 h-1' />

          {/* Contact Information */}
          <div>
            <p className="underline text-lg font-semibold">CONTACT INFORMATION</p>
            <div className='grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-3 mt-3'>
              <p className='text-lg border-gray-700'>Email ID</p>
              <p className='border bg-gray-700 p-2 rounded text-white'>{userData.email}</p>

              <p className='text-lg border-gray-700'>Phone</p>
              {isEdit ? (
                <input
                  className='w-full border bg-gray-700 p-2 rounded text-white'
                  type='text'
                  value={userData.phone}
                  onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                />
              ) : (
                <p className='border bg-gray-200 p-2 rounded'>{userData.phone}</p>
              )}
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-5">
            <p className="underline text-lg font-semibold">ADDRESS</p>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-2 mt-4">
              <p className="text-lg border-gray-700">Line 1</p>
              {isEdit ? (
                <input
                  className="w-full border bg-gray-700 p-2 rounded text-white"
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
              ) : (
                <p className='border bg-gray-200 p-2 rounded'>{userData.address.line1}</p>
              )}

              <p className="text-lg border-gray-700">Line 2</p>
              {isEdit ? (
                <input
                  className="w-full border bg-gray-700 p-2 rounded text-white"
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              ) : (
                <p className='border bg-gray-200 p-2 rounded'>{userData.address.line2}</p>
              )}
            </div>
          </div>

          {/* Basic Information */}
          <div className='mt-5'>
            <p className="underline text-lg font-semibold">BASIC INFORMATION</p>
            <div className='grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-3 mt-3 text-center'>
              <p className='text-lg border-gray-700'>Gender</p>
              {isEdit ? (
                <select
                  className='w-full border bg-gray-700 p-2 rounded text-white'
                  onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                  value={userData.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className='border bg-gray-200 p-2 rounded'>{userData.gender}</p>
              )}

              <p className='text-lg border-gray-700'>Date of Birth</p>
              {isEdit ? (
                <input
                  className='w-full border bg-gray-700 p-2 rounded text-white'
                  type='date'
                  value={userData.dob}
                  onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                />
              ) : (
                <p className='border bg-gray-200 p-2 rounded'>{userData.dob}</p>
              )}
            </div>
          </div>

          {/* Edit / Save Button */}
          <div className='w-full'>
            {isEdit ? (
              <button
                className='w-full sm:w-full border bg-gray-700 p-2 mt-3 rounded text-white'
                onClick={() => setIsEdit(false)}
              >
                Save Data
              </button>
            ) : (
              <button
                className='w-full sm:w-full border bg-gray-700 p-2 mt-3 rounded text-white'
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>

        {/* Description Section */}
        <div className='text-gray-700 text-sm space-y-4'>
          <div className='text-gray-700 text-sm space-y-4'>
            <p className='font-semibold text-xl'>Experience</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A mollitia molestias ratione fugiat ipsum aliquid distinctio expedita asperiores!
            </p>
            <p>
              Exercitationem officia hic illum laboriosam magnam possimus architecto quos quia dolorum alias fugit eius maiores optio necessitatibus.
            </p>
          </div>
          <div className='text-gray-700 text-sm space-y-4'>
            <p className='font-semibold text-xl'>Interested Field</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A mollitia molestias ratione fugiat ipsum aliquid distinctio expedita asperiores!
            </p>
            <p>
              Exercitationem officia hic illum laboriosam magnam possimus architecto quos quia dolorum alias fugit eius maiores optio necessitatibus.
            </p>
          </div>
          <div className='text-gray-700 text-sm space-y-4'>
            <p className='font-semibold text-xl'>Education details</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A mollitia molestias ratione fugiat ipsum aliquid distinctio expedita asperiores!
            </p>
            <p>
              Exercitationem officia hic illum laboriosam magnam possimus architecto quos quia dolorum alias fugit eius maiores optio necessitatibus.
            </p>
          </div>
          <div className='text-gray-700 text-sm space-y-4'>
            <p className='font-semibold text-xl'>Patient healthy</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A mollitia molestias ratione fugiat ipsum aliquid distinctio expedita asperiores!
            </p>
            <p>
              Exercitationem officia hic illum laboriosam magnam possimus architecto quos quia dolorum alias fugit eius maiores optio necessitatibus.
            </p>
          </div>
          <div className='text-gray-700 text-sm space-y-4'>
            <p className='font-semibold text-xl'>My journey</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A mollitia molestias ratione fugiat ipsum aliquid distinctio expedita asperiores!
            </p>
            <p>
              Exercitationem officia hic illum laboriosam magnam possimus architecto quos quia dolorum alias fugit eius maiores optio necessitatibus.
            </p>
            <p>
              Exercitationem officia hic illum laboriosam magnam possimus architecto quos quia dolorum alias fugit eius maiores optio necessitatibus.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default MyProfile;
