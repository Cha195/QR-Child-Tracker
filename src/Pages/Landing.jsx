import React from 'react'
import IPhone from '../Assets/iphone.png'
import Mac from '../Assets/mac.png'

const Landing = () => {
  return (
    <div className='h-full'>
      <div className='w-screen h-full'>
        <div className='mt-20 mb-30 text-center text-2xl md:text-4xl text-black font-sora font-bold gap-4'>
          <p>Protect Your Child</p>
          <p className='bt-5'>just with a reistration process</p>
        </div>
        <div className='mt-10 flex mx-auto w-36'>
          <a href='/register' className='py-3 font-bold font-sora border-2 bg-purple-700 border-purple-600 w-36 hover:bg-white hover:text-newblue rounded-md text-white'>REGISTER</a>
        </div>
        <div className='relative'>
          <img src={Mac} alt='iphone' className='w-4/12 absolute' />
          <img src={IPhone} alt='iphone' className='w-1/12 absolute mx-auto' />
        </div>
        <div className='w-2/3 h-2/3 bg-purple-400 rounded absolute top-2/3 -z-10' />
      </div>
      {/* <div className='h-screen w-screen p-20' /> */}
    </div>
  )
}

export default Landing
