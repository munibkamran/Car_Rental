import React from 'react'
import videoImg from "../../assets/video-img.jpg";

const Banner = () => {
  return (
    <section className='mx-auto max-w-[1140px] p-4 mt-14'>
      <div className=''>
       <img src={videoImg} alt="" className='rounded-xl h-86 w-full object-cover'/>
      </div>
    </section>
  )
}

export default Banner
