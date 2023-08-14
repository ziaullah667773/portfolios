import React from "react";
import { content } from "./Content";
import Link from "next/link";

const AnimatedNav = () => {
  const { nav } = content;
  return (
    <section className="min-h-screen pt-5 text-white">
      <header className="mt-6 flex items-center justify-center   ">
        {/* <nav className=" relative bg-[#222] rounded-[8px] h-[50px] w-[524px] flex items-center  ">
          {nav.map((item, i) => (
            <div key={i} className="animated-nav ">
              <a
                href={item.link}
                className={`text-[1em] font-[500] px-[23px] text-slate-200 relative inline-block z-[1] ${
                  item.isActive ? "active" : ""
                }`}
                data-index={i}
              >
                {item.name}
              </a>
              {!item.isActive && <span className="animated-nav-span"></span>}
            </div>
          ))}
        </nav> */}
        <nav className="animated-nav relative bg-[#222] rounded-[8px] h-[50px] w-[500px] flex items-center justify-center" >
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Product</Link>
            <Link href="/">Contact</Link>
            <span></span>
        </nav>
      </header>
    </section>
  );
};

export default AnimatedNav;
