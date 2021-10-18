import React from 'react'
import HomeSvg from '../Assets/home.svg'

const Home = () => {

  return (
    <div className='h-screen w-screen'>
      {/* {
        ((window.localStorage.getItem('token') === null) ||
        (window.localStorage.getItem('token') === undefined) ||
        (new Date().getTime() > window.localStorage.getItem('accessExpirationTime') &&
        window.localStorage.removeItem('token'))) &&
          <Redirect to='/login' />
      } */}
      <div className='relative overflow-hidden pt-20 h-full'>
        <div className='pt-8 text-left pl-14 h-full'>
          <h1 className='text-3xl font-sora font-bold w-2/3 my-14 mx-4'>Let's get you started!</h1>
          <p className='mt-5 mx-8 text-xl font-medium w-2/3'>1. Register point of contact details</p>
          <p className='mt-5 mx-8 text-xl font-medium w-2/3'>2. Get your unique QR code</p>
          <p className='mt-5 mx-8 text-xl font-medium w-2/3'>3. Shop your favorite clothes with the code embedded!</p>

          <div className='flex flex-col items-center w-1/3 pt-8 ml-10'>
            <a
              href='/poc'
              className='bg-newblue text-white w-full px-16 py-4 text-center rounded-md font-sora font-semibold text-lg'
            >
              Get Started
            </a>
          </div>
        </div>
        <img alt='desktop' className='absolute h-1/2 right-16 top-1/4' src={HomeSvg} />
      </div>
    </div>
  )
}

export default Home
