import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { doctors, currencySymbol } = useContext(AppContext);
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);

  const days=['SUN', 'MON', 'TUE','WED', 'THU','FRI', 'SAT']
  const [docSlots, setDocSlots]=useState([])
  const [slotIndex, setSlotIndex]=useState(0)
  const [slotTime, setSlotTime]= useState('')

  const fetchDocInfo = async ()=>{
    const docInformation = doctors.find(doc => doc._id === docId);
    setDocInfo(docInformation);
    console.log(docInfo);
  }

  const getAvailableSlots= async ()=>{
    setDocSlots([])
    //get current date
    let today=new Date()
    //set date with current date
    for(let i=0;i<7;i++){
      let currentDate=new Date()
      currentDate.
      setDate(today.getDate()+i)
    

    let endTime=new Date()
    endTime.setDate(today.getDate()+i)
    endTime.setHours(21,0,0,0)

    if(today.getDate()===currentDate.getDate()){
      currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1: 10)
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 :0)
    }
    else{
      currentDate.setHours(10)
      currentDate.setMinutes(0)
    }

    let timeSlots=[]

    while(currentDate<endTime){
      let formattedTime=currentDate.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
      //add slot to array
      timeSlots.push({
        datetime: new Date(currentDate),
        time:formattedTime
      })
      // minutes increaments by 30
      currentDate.setMinutes(currentDate.getMinutes()+30)
    }

    setDocSlots(prev=>([...prev, timeSlots]))
  }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  useEffect(()=>{
    getAvailableSlots()
  }, [docInfo])

  console.log(docId)
  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        {/* -------------Doctor details */}
        <div>
          <img className='bg-gray-700 w-full sm:max-w-72 rounded-lg' src={docInfo.image} />
        </div>
        <div className='flex-1 border border-gray-700 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-auto mt-[80px] sm:mt-0'>
          {/* Doctor info: name, degree, experience */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img src={assets.verified_icon} /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-green-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/*------------ Doctor about--------------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-green-900 mt-3'>About-<img src={assets.info_icon} /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          <div>
            <p className='text-green-500 font-medium mt-5'>Appointment fees: <span className='text-green-700'>{currencySymbol}{docInfo.fees}</span></p>
          </div>

        </div>

      </div>
      {/* ----------Booking slots ---------------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-green-700'> 
      <p>Booking slots</p>
      <div  className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
        {docSlots.length && docSlots.map((item, index)=>(
          <div onClick={()=>setSlotIndex(index)} className={`text-center  py-6 min-w-16  rounded-full cursor-pointer ${slotIndex===index?'bg-gray-700 text-white':'border border-gray-700'}`} key={index}>
            <p>{item[0] && days[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {docSlots.length && docSlots[slotIndex].map((item, index)=>(
          <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime?'bg-gray-700 text-white':'border border-gray-700'}`} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))}
      </div>
      <button className='bg-gray-700 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book appointment</button>
      </div>
      {/* Releted doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
