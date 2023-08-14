import React ,{useState}from 'react'
import {content} from "../Content"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
    const {Testimonials}=content;
    const [activeIndex,setActiveIndex]=useState(0)
  return (
    <section id='testimonial' className=''>
      <div className='md:container py-14 px-5 min-h-screen'>
        <div>
            <h2 className='text-5xl font-bold font-Poppins text-dark_primary'>{Testimonials.title}</h2>
            <h4 className='md:text-4xl text-3xl !leading-relaxed font-Paprika text-gray-400'>{Testimonials.subtitle}</h4>
            <br />
        </div>
        <div>
        <Swiper 
        direction='vertical'
        spaceBetween={40}
        slidesPerView={1.7}
        onSlideChange={(e)=>{
            console.log(e.realIndex)
            setActiveIndex(e.realIndex)
        }}
        loop={true}
        pagination={{
            clickable:true,
        }}
        modules={[Pagination,Autoplay]}
        className="md:h-96 h-[40rem] max-w-3xl"
        
        >
            {
              Testimonials.testimonials_content.map((content,i)=>(
                <SwiperSlide key={i} >
                    <div className={`duration-500 bg-bg_light_primary mx-8 p-8 border-2 border-slate-200 h-full rounded-2xl flex items-center gap-6 md:flex-row flex-col ${activeIndex!==i&&'scale-75 blur-sm'}`}>
                    <img src={content.img} alt="" className='h-24'/>
                    <div>
                        <p className='sm:text-base text-sm'>{content.review}</p>
                         <br />
                        <h6 className='font-Paprika font-bold text-[#253D57] leading-8'>{content.name}</h6>
                    </div>
                    </div>
                </SwiperSlide>
              ))
            }
        </Swiper>
        </div>
       
      </div>
    </section>
  )
}

export default Testimonial
