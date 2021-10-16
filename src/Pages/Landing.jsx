import React from 'react'
// import iphone from '../Assets/iphone.png'
// import { ReactComponent as LandingImage } from '../Assets/landing.svg'
import { ReactComponent as TriangleImage1 } from '../Assets/triangle1.svg'
import { ReactComponent as TriangleImage2 } from '../Assets/triangle2.svg'
import { ReactComponent as TriangleImage3 } from '../Assets/triangle3.svg'

const Landing = () => {
  return (
    <div className='h-full overflow-auto'>
      <div className='h-full w-full relative'>
        <TriangleImage3 className='absolute -top-1/4 left-0 -z-30' />
        <TriangleImage2 className='absolute -top-1/4 left-0 -z-20' />
        <TriangleImage1 className='absolute -top-1/4 left-0 -z-10' />
      </div>
      <div className='h-screen w-screen p-20'>
        <div className='mt-20 mb-30 text-center text-2xl md:text-4xl text-white font-sora'>An easy solution to find your child</div>
        <div className='mt-10 flex mx-auto w-80 gap-8'>
          <button className='py-3 font-bold font-sora border-2 border-white w-36 hover:bg-white hover:text-newblue rounded-md text-white'>LOGIN</button>
          <button className='py-3 font-bold font-sora border-2 border-white w-36 hover:bg-white hover:text-newblue rounded-md text-white'>REGISTER</button>
        </div>
        {/* <div className='relative'>
          <LandingImage className='mx-auto mt-16 md:mt-20 relative' />
          <img src={iphone} alt='iphone' className='absolute left-1/2 h-56 -bottom-1/4 md:h-72 md:-bottom-3/4' />
        </div> */}
      </div>
    </div>
  )
}

export default Landing
