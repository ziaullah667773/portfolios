import React,{useEffect} from 'react'
import {content} from "./Content";

const Nav4 = () => {
    const {nav}=content;
    useEffect(() => {
    const logregBox = document.querySelector(".logreg-box");

       
        const btnPopup=document.querySelector(".btnlogin-popup")
    
       
        btnPopup.addEventListener("click", () => {
            logregBox.classList.add("active-popup");
          });
    
       
      }, []);
  return (
    <header className='mt-6 flex items-center justify-between px-[100px] py-[20px] '>
        <h2 className='text-[2em] text-white'>Logo</h2>
        <nav>
            <div className='nav4'>
                {
                    nav.map((item,i)=>(
                        <a key={i} href={item.link} className="text-[16px] font-[500] mr-[30px]  text-slate-200">{item.name}</a>
                    ))
                }
                <button className='btnlogin-popup w-[130px] h-[50px] border border-slate-100 rounded-[6px] font-[500] text-slate-100 cursor-pointer text-[1.1rem] hover:bg-slate-100 hover:text-[#162938]'>Login</button>
            </div>
        </nav>
      
    </header>
    
  )
}

export default Nav4
