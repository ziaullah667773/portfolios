import React from 'react'
import Image from 'next/image'

const Hireme = () => {
  return (
    <section id='hireme' className='py-10 px-3 text-white'>
        <div className='text-center'>
            <h3 className='text-4xl font-semibold'>Hire <span className='text-cyan-600'>Me</span></h3>
            <p className='text-gray-400 text-lg mt-3'>Do you have any work?</p>
        </div>
        <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
            <div>
                <h2 className='text-2xl font-semibold'>Do you want any work from me?</h2>
                <p className='lg:text-left text-justify text-sm max-w-lg mt-4 text-gray-200 loading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem veritatis commodi saepe corrupti quam nesciunt minima, maxime placeat rem corporis iure, maiores eligendi totam! Laborum ullam deserunt saepe dolores molestiae!</p>
                <button className='btn-primary mt-10'>Say Hello</button>
            </div>
            <Image src="/images/hero1.png" alt="" width={500} height={500} className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover" />
            
        </div>
      
    </section>
  )
}

export default Hireme
