import Link from 'next/link'
import React from 'react'

const AnimatedNav2 = () => {
  return (
    <section className='mt-6 pt-6'>
      <nav className='animated-nav2 flex items-center justify-center   h-[50px] bg-black text-[#333]  text-[1.1rem]'>
        <Link href="/">Home <span></span></Link>
        <Link href="/">About <span></span></Link>
        <Link href="/">Product <span></span></Link>
        <Link href="/">Services <span></span></Link>
        <Link href="/">Contact <span></span></Link>
      </nav>
    </section>
  )
}

export default AnimatedNav2
