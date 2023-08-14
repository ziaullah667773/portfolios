import React, { useEffect } from 'react'
import {GoHome} from "react-icons/go";
import {CiUser} from "react-icons/ci";
import {BsChat,BsCamera} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";

const AnimatedNav3 = () => {
    useEffect(()=>{
        const list=document.querySelectorAll('.list');
        function activeLink(){
            list.forEach((item)=>item.classList.remove('active'));
            this.classList.add("active");
        }
        list.forEach((item)=>item.addEventListener('click',activeLink))
    })
  return (
    <section className='mt-6 pt-14 flex items-center justify-center '>
      <div className='navigation    text-[#ede4e4]  text-[1.1rem]'>
        <ul className=''>
            <li className='list active '>
                <a href="#">
                    <span className='icon'><GoHome/></span>
                    <span className='text'>Home</span>
                    <span className='circle'></span>
                </a>
            </li>
            <li className='list'>
                <a href="#">
                    <span className='icon'><CiUser/></span>
                    <span className='text'>Profile</span>
                    <span className='circle'></span>
                </a>
            </li>
            <li className='list'>
                <a href="#">
                    <span className='icon'><BsChat/></span>
                    <span className='text'>message</span>
                    <span className='circle'></span>
                </a>
            </li>
            <li className='list'>
                <a href="#">
                    <span className='icon'><BsCamera/></span>
                    <span className='text'>Photos</span>
                    <span className='circle'></span>
                </a>
            </li>
            <li className='list'>
                <a href="#">
                    <span className='icon'><AiOutlineSetting/></span>
                    <span className='text'>Settings</span>
                    <span className='circle'></span>
                </a>
            </li>
            <div className='indicator'></div>
        </ul>
      </div>
    </section>
  )
}

export default AnimatedNav3
