import React,{useEffect,useRef} from 'react'
import {FiChevronDown} from "react-icons/fi"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3,DiJavascript,DiReact} from "react-icons/di"
import {CgFigma} from "react-icons/cg"
const Dropdown = () => {
    useEffect(() => {
        const selectBtn = document.querySelector("#select-btn");
        const text = document.getElementById("text");
        const options = document.querySelectorAll(".option");
      
        const handleClick = () => {
          selectBtn.classList.toggle("active");
        };
      
        const handleOptionClick = function () {
          text.innerHTML = this.textContent;
          setTimeout(() => {
            selectBtn.classList.remove("active");
          }, 300);
        };
      
        selectBtn.addEventListener("click", handleClick);
      
        for (let option of options) {
          option.addEventListener("click", handleOptionClick);
        }
      
        return () => {
          selectBtn.removeEventListener("click", handleClick);
      
          for (let option of options) {
            option.removeEventListener("click", handleOptionClick);
          }
        };
      }, []);
  return (
    <section className="min-h-screen pt-5 flex items-center justify-center  text-white">
     <div className='select-menu mt-20'>
        <div  className='select-btn  h-[55px] text-[#333] bg-white text-[18px] p-[20px] rounded-[8px] cursor-pointer shadow shadow-[0 0px rgba(0,0,0,.1)] ' id='select-btn'>
            <span  id='text'>Dropdown Select</span>
            <FiChevronDown className='icon-arrow text-[25px]'/>
        </div>
        <ul className='list'>
            <li className='option'   style={{'--i': 5}} >
                <AiFillHtml5 className='icon'/>
                <span className='option-text'>HTML</span>
            </li>
            <li className='option'   style={{'--i': 4}} >
                <DiCss3 className='icon'/>
                <span className='option-text'>CSS</span>
            </li>
            <li className='option'   style={{'--i': 3}} >
                <DiJavascript className='icon'/>
                <span className='option-text'>Javascript</span>
            </li>
            <li className='option'   style={{'--i': 2}} >
                <DiReact className='icon'/>
                <span className='option-text'>Reactjs</span>
            </li>
            <li className='option'   style={{'--i': 1}} >
                <CgFigma className='icon'/>
                <span className='option-text'>Figma</span>
            </li>
        </ul>
     </div>
    </section>
  )
}

export default Dropdown
