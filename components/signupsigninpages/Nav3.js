import React from "react";
import { content } from "./Content";
import { FiSearch } from "react-icons/fi";

const Nav3 = () => {
  const { nav } = content;
  return (
    <>
      <header className=" mt-6 flex items-center justify-between px-[40px] py-[12.5px] container bg-transparent">
        <nav className="">
          <div className="nav">
            {nav.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-[16px] font-[500] mr-[30px]  text-slate-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <form
          action=""
          className="w-[250px] h-[45px] bg-transparent border-2 border-slate-400 rounded-[6px] flex items-center "
        >
          <input
            type="text"
            placeholder="search..."
            className="rounded bg-transparent text-[16px] text-slate-200"
          />
          <button type="submit" className="w-[40px] h-full bg-transparent">
            <FiSearch className="text-[22px] text-slate-200" />
          </button>
        </form>
      </header>
     
    </>
  );
};

export default Nav3;
