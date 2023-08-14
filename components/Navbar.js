import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Buttons from "./Buttons";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky,setSticky]=useState(true);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const nav=document.querySelector('nav')
      window.scrollY > 0 ? setSticky(true):setSticky(false);
    })
  },[]);


  return (
    <nav className={`fixed w-full left-0 top-0 z-[1000]  bg-gray-900  text-gray-400 ${sticky?'md:bg-white/60 text-gray-900':'text-white'}`}>
      <div className="">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <h1 className="md:cursor-pointer h-9 text-3xl font-sans ">Zia<span className="text-cyan-600">Ullah</span></h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose /> : <FiMenu />}
            </div>
          </div>
          <ul className="md:flex hidden  items-center gap-8 font-sans">
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="py-7 px-3 inline-block">
              About
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link href={"/skills"} className="py-7 px-3 inline-block">
               Skills
              </Link>
            </li>
            
          </ul>
          <div className="md:block hidden">
            <Buttons />
          </div>
          {/* MOBILE MENU */}
          <div   className={`md:hidden  bg-slate-900 absolute w-full h-screen z-[8] overflow-auto bottom-0 py-24 pl-4 top-0 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}>
          <ul
           
           onClick={()=> setOpen(false)}
          >
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="py-7 px-3 inline-block">
                About
              </Link>
            </li>
            <NavLinks />
            
            <li>
              <Link href={"/skills"} className="py-7 px-3 inline-block">
                Skills
              </Link>
            </li>
            <div className="py-5">
              <Buttons />
            </div>
            <div className="text-3xl absolute top-5 right-5">
              <AiOutlineClose />
            </div>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
