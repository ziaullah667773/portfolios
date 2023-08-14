import React, { useEffect } from "react";
import { DiCodeigniter } from "react-icons/di";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import { GrMail } from "react-icons/gr";

const SignupSignin = () => {
  useEffect(() => {
    const logregBox = document.querySelector(".logreg-box");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");

    registerLink.addEventListener("click", () => {
      logregBox.classList.add("active");
    });
    loginLink.addEventListener("click", () => {
      logregBox.classList.remove("active");
    });

    return () => {
      // Clean up the event listener on unmount
      registerLink.removeEventListener("click", () => {
        logregBox.classList.add("active");
      });
    };
  }, []);
  return (
    <section
      className="min-h-screen pt-5  relative bg-cover bg-center backdrop"
      style={{ backgroundImage: `url('/images/bgtree.jpg') ` }}
    >
      <div
        className="absolute flex top-1/2 left-1/2 w-[75%] h-[550px] rounded-[10px] bg-cover bg-center transform -translate-x-1/2 -translate-y-1/2 "
        style={{ backgroundImage: `url('/images/bgtree.jpg')` }}
      >
        <div className="w-[58%] h-full bg-transperant p-[80px] flex flex-col justify-between text-slate-200">
          <h2 className="flex text-[30px]">
            <DiCodeigniter />
            Code
          </h2>

          <div className="">
            <h2 className="text-[40px] leading-9">
              Welcome!
              <br /> <span className="text-[25px]">To Our Website</span>
            </h2>
            <p className="text-[16px] my-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              laborum ea reprehenderit.{" "}
            </p>
            <div className="flex text-[22px] gap-3 transition duration-200">
              <FaFacebookSquare className="hover:transform hover:scale-125" />
              <FaLinkedin className="hover:transform hover:scale-125" />
              <AiFillInstagram className="hover:transform hover:scale-125" />
              <FaTwitter className="hover:transform hover:scale-125" />
            </div>
          </div>
        </div>
        <div className="w-[42%] h-full relative logreg-box overflow-hidden">
          <div className="absolute flex items-center justify-center bg-transparent w-full h-full backdrop-blur-[20px] rounded-tr-[10px] rounded-br-[10px] text-[#e4e4e4] form-box login">
            <form action="">
              <h2 className="text-[32px] font-medium text-center">Sign In</h2>
              <div className=" input">
                <span className="icon">
                  <GrMail />
                </span>
                <input type="email" id="email" className="" placeholder=" " />
                <label htmlFor="email" className="">
                  Email
                </label>
              </div>
              <div className=" input">
                <span className="icon">
                  <HiLockClosed />
                </span>
                <input type="password" id="password" className="" placeholder=" " />
                <label htmlFor="password" className="">
                  Password
                </label>
              </div>
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
                className="w-full h-[45px] bg-[#c4103d] rounded-[4px] text-[#e4e4e4] font-[500] text-[16px] shadow"
              >
                Sign In
              </button>
              <div className="text-[14.5px] font-[500] text-center mt-[25px]">
                <p>
                  Don`&apos;t have an account?{" "}
                  <a
                    href="#"
                    className="font-[600] hover:underline register-link"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="absolute flex items-center justify-center bg-transparent w-full h-full backdrop-blur-[20px] rounded-tr-[10px] rounded-br-[10px] text-[#e4e4e4] transform translate-x-[430px] duration-500 form-box register">
            <form action="">
              <h2 className="text-[32px] font-medium text-center">Sign Up</h2>
              <div className=" input">
                <span className="icon">
                  <FaUserAlt />
                </span>
                <input type="text" id="name" className="" placeholder=" " />
                <label htmlFor="name" className="">
                  Name
                </label>
              </div>
              <div className=" input">
                <span className="icon">
                  <GrMail />
                </span>
                <input type="email" id="email" className="" placeholder=" " />
                <label htmlFor="email" className="">
                  Email
                </label>
              </div>
              <div className=" input">
                <span className="icon">
                  <HiLockClosed />
                </span>
                <input type="password" id="password" className="" placeholder=" " />
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
                className="w-full h-[45px] bg-[#c4103d] rounded-[4px] text-[#e4e4e4] font-[500] text-[16px] shadow"
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

export default SignupSignin;
