import React from 'react'
import wo from '../Assets/woman_hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className={`bg-[#2f4f4f56] h-[800px] bg-no-repeat bg-center bg-cover py-24 `}>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='fle flex-col justify-center mt-28'>
        <div className='font-semibold flex items-center uppercase'>
        <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
        <div className=''>New Trend </div>
      </div>
      <h1 className='text-[70px] leading-[1.1] font-light mb-4'>Autumn Sale Stylish <br />
      <span className='font-semibold'>
        WOMENS</span></h1>
        <Link
         to={''} className='self-start font-semibold uppercase underline text-black border-black'>
        <h4>Dsicover More</h4>
        </Link>
        </div>
      <div className='hidden lg:block transition-all translate-y-1 shadow-2xl'>
<img src={wo} alt="" />
      </div>
    </div>
    </section>
  )
}

export default Hero