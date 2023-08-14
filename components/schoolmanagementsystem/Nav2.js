import React, { useState } from 'react'
import {content} from "./Content"

const Nav2 = () => {
    const {nav}=content
    const [active,setActive]=useState(0)
  return (
    <div>
      <nav className='sm:cursor-pointer fixed top-[5.5rem] left-10  rounded-lg p-2 flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md  text-dark_primary shadow-sm shadow-slate-400 border border-slate-300 z-[999]'>
        {
          nav.map((item,i)=>(
            <a key={i} href={item.link} onClick={()=>setActive(i) } className={`text-xl p-2.5 rounded-lg ${i===active&&"bg-green-800 text-white shadow-sm shadow-slate-400 border border-slate-300"}`}>{item.name}</a>
          ))
        }
      </nav>
    </div>
  )
}

export default Nav2
