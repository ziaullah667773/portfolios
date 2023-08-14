import React from 'react'
import {content} from "../Content"

const Hireme = () => {
    const {Hireme}=content;
  return (
    <section id='hireme' className='bg-bg_light_primary min-h-screen'>
      <div className='md:container pt-14 px-5'>
      <div>
      <h2 className='text-5xl text-bold font-Poppins text-dark_primary'>{Hireme.title}</h2>
      <h4 className='md:text-4xl text-3xl !leading-relaxed font-Paprika text-gray-400'>{Hireme.subtitle}</h4>
       <br />
       <div className='flex items-center md:flex-row flex-col-reverse'>
        <img src={Hireme.image1} alt="" className='max-w-sm' />
        <div className='border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]'>
            <p className='text-[0.95rem] text-dark_primary font-[poppins] loading-7'>{Hireme.para}</p>
            <br />
            <button className='btn bg-dark_primary text-white'>{Hireme.btnText}</button>
        </div>
       </div>
      </div>
      </div>
    </section>
  )
}

export default Hireme
