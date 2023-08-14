// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { AiOutlineMenu } from "react-icons/ai";

// const Nav1 = () => {
//   const [sticky, setSticky] = useState(false);
//   const [open, setOpen] = useState(false);
//   const menuLinks = [
//     { name: "Home", link: "/portfolio" },
//     { name: "About", link: "/portfolio/about1" },
//     { name: "Contact", link: "/portfolio/about1" },
//   ];
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const nav = document.querySelector("nav");
//       window.scrollY > 0 ? setSticky(true) : setSticky(false);
//     });
//   }, []);
//   return (
//     <>
//       <nav
//         className={`fixed w-full left-0 top-20 z-[999] ${
//           sticky ? "bg-white/60 text-gray-900" : "text-white"
//         }`}
//       >
//         <div className="flex items-center justify-between ">
//           <div className="mx-7">
//             <h4 className="text-4xl font-bold">
//               L<span className="text-cyan-600">o</span>g
//               <span className="text-cyan-600">o</span>
//             </h4>
//           </div>
//           <div
//             className={`${
//               sticky ? "md:bg-white/0 " : "bg-white"
//             }text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full bg-white`}
//           >
//             <ul className="flex gap-1 items-center py-2 text-lg text-slate-600">
//               {menuLinks?.map((menu, i) => (
//                 <li key={i} className="px-6 hover:text-cyan-600">
//                   <Link href={menu?.link}>{menu.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div
//             onClick={()=>setOpen(!open)}
//             className={`z-[999] ${
//               open ? "text-gray-900" : "text-gray-600"
//             } text-3xl md:hidden m-5`}
//           >
//             <AiOutlineMenu />
//           </div>
//           {/* mobile menu */}
//           <div
//             className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
//               open ? "right-0" : "right-[-100%]"
//             }`}
//           >
//             <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//               {menuLinks.map((menu, i) => (
//                 <li 
//                 onClick={()=>setOpen(false)} key={i} className="px-6 hover:text-cyan-600">
//                   <Link href={menu?.link}>{menu.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav1;

import React,{createElement, useState} from 'react'
import {content} from "../Content"
import {HiMenuAlt2} from "react-icons/hi";

const Nav1 = () => {
  const {nav}=content;
  const [active,setActive]=useState(0)
  const [showMenu,setShowMenu]=useState(false)
  return (
    <div className='flex justify-center w-full '>
      <div onClick={()=>setShowMenu(!showMenu)} className='sm:cursor-pointer fixed top-20 left-10 z-[999] rounded-lg bg-white/40 p-2'>
      <HiMenuAlt2 size={34} />
      </div>
      <nav className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${showMenu?"bottom-10 ":"bottom-[-100%]"}`}>
        {
          nav.map((item,i)=>(
            <a key={i} href={item.link} onClick={()=> setActive(i)} className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${i===active&&'bg-dark_primary text-white'}`}>{createElement(item.icon)}</a>
          ))
        }
      </nav>
      
    </div>
  )
}

export default Nav1
