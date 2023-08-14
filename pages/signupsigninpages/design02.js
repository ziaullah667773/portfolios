import React, { useEffect } from "react";
import {
  
  FaUserAlt,
} from "react-icons/fa";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import { GrMail } from "react-icons/gr";

import Nav4 from "../../components/signupsigninpages/Nav4";

const Design02 = () => {
    const formData = [
        {
          title: "Sign In",
          fields: [
            {
              id: "email",
              type: "email",
              label: "Email",
              icon: <GrMail />,
            },
            {
              id: "password",
              type: "password",
              label: "Password",
              icon: <HiLockClosed />,
            },
          ],
          checkboxLabel: "Remember Me",
          forgotPasswordLabel: "Forgot password?",
          submitLabel: "Sign In",
          registerLabel: "Register",
        },
        // add more form data objects as needed
      ];
    useEffect(() => {
        const logBox = document.querySelector(".log");
        const loginLink = document.querySelector(".login-link");
        const registerLink = document.querySelector(".register-link");
        const iconClose = document.querySelector(".icon-close");
        
    
        registerLink.addEventListener("click", () => {
            logBox.classList.add("active");
        });
        loginLink.addEventListener("click", () => {
            logBox.classList.remove("active");
        });
        iconClose.addEventListener("click", () => {
            logBox.classList.remove("active-popup");
          });
       
    
        return () => {
          // Clean up the event listener on unmount
          registerLink.removeEventListener("click", () => {
            logBox.classList.add("active");
          });
        };
      }, []);
  return (
    <section
      className="mt-20 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/bgsky.jpg') ` }}
    >
      <Nav4 />
      <div className="flex justify-center items-center mt-8">
        <div className="text bg-black mr-4 mb-4 h-[400px] w-[500px] text-white flex  rounded-lg">
          <span className="first-text text-[40px]">I&apos;m a</span>
          <ul className="sec-text text-[40px] text-[#0ef] px-[20px]">
            <li><span>Frontend Developer</span></li>
            <li><span>Freelancer</span></li>
            <li><span>Designer</span></li>
          </ul>
        </div>
        <div className="w-[400px] h-[440px] relative logreg-box log overflow-hidden border border-[rgba(255,255,255,.5)] rounded-[20px] bg-transparent backdrop-blur-[20px] ">
          <span className="icon-close absolute top-0 right-0 w-[45px] h-[45px] bg-[#162938] text-[1.5rem] text-white flex items-center justify-center rounded-bl-[20px] cursor-pointer z-[1]">
            <AiOutlineClose />
          </span>
         {
            formData.map((form,index)=>(
                <div key={index} className="absolute flex items-center justify-center bg-transparent w-full h-full  rounded-tr-[10px] rounded-br-[10px] text-[#e4e4e4] form-box login">
                <form action="">
                  <h2 className="text-[32px] font-medium text-center">{form.title}</h2>
                  {
                    form.fields.map((field,index)=>(
                        <div key={index} className=" input">
                    <span className="icon">
                    {field.icon}
                    </span>
                    <input type={field.type} id={field.id} className="" />
                    <label htmlFor={field.id} className="">
                    {field.label}
                    </label>
                  </div>
                    ))
                  }
               
                  <div className="text-[14.5px] font-[500] mt-[-15px] mb-[15px] flex justify-between">
                    <label htmlFor="">
                      <input type="checkbox" /> Remember Me{" "}
                    </label>
                    <a href="#login" className="hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-[45px] bg-[#162938] rounded-[4px] text-[#e4e4e4] font-[500] text-[16px] shadow"
                  >
                    Sign In
                  </button>
                  <div className="text-[14.5px] font-[500] text-center mt-[25px]">
                    <p>
                      Don&apos;t have an account?{" "}
                      <a
                        href="#"
                        className="font-[600] hover:underline register-link"
                      >
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            ))
         }
          <div className="absolute flex items-center justify-center bg-transparent w-full h-full  rounded-tr-[10px] rounded-br-[10px] text-[#e4e4e4] transform translate-x-[430px] duration-500 form-box register">
            <form action="">
              <h2 className="text-[32px] font-medium text-center">Sign Up</h2>
              <div className=" input">
                <span className="icon">
                  <FaUserAlt />
                </span>
                <input type="text" id="name" className="" />
                <label htmlFor="name" className="">
                  Name
                </label>
              </div>
              <div className=" input">
                <span className="icon">
                  <GrMail />
                </span>
                <input type="email" id="email" className="" />
                <label htmlFor="email" className="">
                  Email
                </label>
              </div>
              <div className=" input">
                <span className="icon">
                  <HiLockClosed />
                </span>
                <input type="password" id="password" className="" />
                <label htmlFor="password" className="">
                  Password
                </label>
              </div>
              <div className="text-[14.5px] font-[500] mt-[-15px] mb-[15px] flex justify-between">
                <label htmlFor="">
                  <input type="checkbox" /> I agree to the terms & conditions{" "}
                </label>
              </div>
              <button
                type="submit"
                className="w-full h-[45px] bg-[#162938] rounded-[4px] text-[#e4e4e4] font-[500] text-[16px] shadow"
              >
                Sign Up
              </button>
              <div className="text-[14.5px] font-[500] text-center mt-[25px]">
                <p>
                  Already have an account{" "}
                  <a href="#" className="font-[600] hover:underline login-link">
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design02;
