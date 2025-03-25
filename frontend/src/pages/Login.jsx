import React, { useState } from 'react'

const Login = () => {
  const [state, setState]=useState('signup')
  const [email, setEmail]=useState('')
  const [password, setPassword]= useState('')
  const [name, setName]=useState('')

  const handleSubmit=async (event)=>{
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-700 rounded-xl text-zinc-600 text-sm shadow-xl'>
      <p className='text-2xl font-semibold'>{state==='signup'?'Create account':'Login'}</p>
      <p className='text-xl font-medium'>Please <span className={state==='signup'?'text-green-800 font-semibold text-lg':'text-gray-900 font-semibold'}> {state==='signup'?'sign up':'log in'}</span> to book appointment</p>
      {
        state==='signup' && <div className='w-full'>
        <p>Full name</p>
        <input className='w-full mt-2 p-2 rounded border border-green-700' type='text' onChange={(e)=>setName(e.value.target)} value={name}/>
      </div>
      }
      <div className='w-full'>
        <p>Email</p>
        <input className='w-full mt-2 p-2 rounded border border-green-700' type='text' onChange={(e)=>setEmail(e.value.target)} value={email}/>
      </div>
      <div className='w-full'>
        <p>Password</p>
        <input className='w-full mt-2 p-2 rounded border border-green-700' type='text' onChange={(e)=>setPassword(e.value.target)} value={password}/>
      </div>
      <div className='w-full'>
        <button className={state==='signup'?'w-full mt-2 p-2 rounded border border-green-700 hover:bg-green-900 hover:text-green-200 cursor-pointer duration-300 transition-all text-xl':'w-full mt-2 p-2 rounded border border-gray-700 hover:bg-gray-900 hover:text-gray-200 cursor-pointer duration-300 transition-all text-xl'} type='submit'>{state==='signup'?'Create account':'Login'}</button>
        {
          state==='signup'?<p className='mt-5 text-green-500'>Already have an account?<span onClick={()=>setState('Login')} className='cursor-pointer hover:bg-gray-200 mx-2 p-2 border rounded-all hover:text-green-950'>Login here</span></p>:<p className='mt-5 text-green-500'>Create new account <span onClick={()=>setState('signup')} className='cursor-pointer hover:bg-gray-200 mx-2 p-2 border rounded-all hover:text-green-950'>Signup</span></p>
        }
      </div>
      </div>
    </form>
  )
}

export default Login
