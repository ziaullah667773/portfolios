import React, { useState } from 'react'
import {content, Content} from "../Content";
import Image from 'next/image';
import "animate.css"
import {motion} from "framer-motion"

const easing=[0.6,-0.5,0.01,0.99];
const fadeInUp={
  initial:{
    y:60,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    trasition:{
      duration:5,
      delay:5,
      ease:easing
    }
  },
}
const stragger={
  animate:{
    trasition:{
      straggerChildren:0.1
    }
  }
}

const Hero = () => {
    const {hero}=content;

  return (
    <motion.div exit={{opacity:0}} initial='initial' animate='animate'>
    <motion.section variants={stragger} id='home'>
      <motion.div variants={fadeInUp}  className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center  items-center z-0'>
        <div    className='absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 z-[-1] '>
           <h1 className='lg:text-6xl text-3xl font-extrabold font-sans  rotate-90 absolute md:top-[30%] top-[6rem] right-[-14%] text-[#EAF2F2]'> 
           {hero.firstName}{" "}
            <motion.span initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween" ,duration:3}} className='text-dark_primary'>{hero.LastName}</motion.span>
           </h1>
        </div>
        {/* first col */}
        <motion.div initial={{y:-70,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2,duration:1}} className='pb-16 px-6 pt-5'>
            <h2 className='text-5xl font-bold font-[poppins] text-dark_primary'>{hero.title}</h2>
            <br />
            <div className='flex justify-end'>
                <button className='font-sans btn '>{hero.btnText}</button>
            </div>
            <div className='flex flex-col gap-10 mt-10'>
                {
                    hero.hero_content.map((content,i)=>(
                        <div key={i} className={`flex items-center gap-5 w-80 ${i===1 && "flex-row-reverse text-right"}`}>
                            <h3 className='text-5xl text-dark_primary font-[poppins]'>{content.count}</h3>
                            <p className='text-[0.95rem] text-dark_primary font-[poppins]'>{content.text}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
        {/* second col */}
        <div className='md:h-[37rem] md:w-[38rem]  h-96 z-[]'>
        {/* <Image src={hero.image} alt="" width={500} height={500} className="" /> */}
        <motion.img initial={{x:60,opacity:0}} animate={{x:0,opacity:1}} transition={{type:"tween" ,duration:2}} src={hero.image} alt="" className='h-full  object-cover' />

        </div>
      </motion.div>
    </motion.section>
    </motion.div>
  )
}

export default Hero
