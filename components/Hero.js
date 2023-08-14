import React from 'react'
import Image from 'next/image'

const Hero = () => {
    const social_media=[
        'logo-instagram',
        'logo-facebook',
        'logo-linkedin',
    ]
  return (
    <section id='home' className='min-h-screen flex py-10  md:flex-row  flex-col items-center'>
      <div className='flex-1 flex items-center justify-center h-full' >
      <Image src="/images/zia.png" alt="" width={500} height={500} className="md:w-11/12 h-full object-cover" />
      </div>
      <div className='flex-1 text-white'>
        <div className='md:text-left text-center'>
            <h1 className='md:text-5xl text-2xl md:loading-normal loading-10 text-white font-bold'>
                <span className='text-cyan-600 md:text-6xl text-5xl'>Hello! <br /></span>
                My Name is <span>Ziaullah</span>
            </h1>
            <h4 className='md:text-2xl text-lg md:loading-normal loading-5 mt-4 font-bold text-gray-500'>Frontend Developer</h4>
            <button className='btn-primary mt-8'>Contact me</button>
            <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
                {
                    social_media.map(icon=>(
                        <div key={icon} className='text-gray-500 hover:text-white cursor-pointer'>
                          <ion-icon name={icon}></ion-icon>
                        </div>
                    )
                    )
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
