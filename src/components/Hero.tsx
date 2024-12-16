import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col w-full bg-[url("/assets/heroimage.svg")] bg-cover h-[1007px] mt-[95]'>
        <div className='flex flex-col gap-2 w-[643px] h-[443px] mt-[253px] ml-[739px] rounded-[10px] p-6 bg-[#FFF3E3]'>
            <div className='flex gap-6 flex-col w-auto h-auto '>
              <div className='w-[123px] h-6 '><p className='font-semibold text-[16px] leading-6 tracking-[3px]  text-[#333333]'>New Arrival</p></div>
              <div className='w-[559px] h-[127px] '><h2 className='font-bold text-[52px] leading-[65px] text-[#B88E2F]'>Discover Our New Collection</h2></div>
              <div className='w-[546px] h-[52px]'><p className='font-medium text-[18px] leading-6 text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p></div>
            </div>

           
            <div className="flex  items-center mt-8">
              <button className="bg-[#B88E2F] w-[222px] h-[74px] p-[25px] text-white">
                <p className='font-bold text-[16px] leading-6 text-white' >BUY NOW</p>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Hero
