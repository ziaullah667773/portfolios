import React, { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from '@emailjs/browser';
import { Toaster,toast } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4c609al', 'template_y9un8ci', form.current, 'CBcK1NZmNJ8Fn6der')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          toast.success('Email send Successfully')
      }, (error) => {
          console.log(error.text);
          toast.error(error.text);
      });
    form.current
  };


  return (
    <section id="contact" className="bg-dark_primary text-white">
        <Toaster/>
      <div className="md:container px-5 py-14">
        <h2 className="text-5xl font-bold  font-Poppins text-white">
          {Contact.title}
        </h2>
        <h6 className="md:text-4xl text-3xl !leading-relaxed font-Paprika text-gray-400">
          {Contact.subtitle}
        </h6>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form ref={form} onSubmit={sendEmail} className=" flex-1 flex flex-col gap-5">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent outline-none font-Poppins"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Id"
              pattern="[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,60}$"
              required
              className="border border-slate-600 p-3 rounded bg-transparent outline-none font-Poppins"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="border border-slate-600 p-3 rounded bg-transparent outline-none font-Poppins h-44"
            ></textarea>
            <button className="btn self-start bg-white text-dark_primary">Submit</button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {
                Contact.social_media.map((content,i)=>(
                    <div key={i} className="flex items-center gap-2">
                        <h4 className="md:text-4xl text-3xl !leading-relaxed font-Paprika text-white">{createElement(content.icon)}</h4>
                        <a className="font-poppins" href={content.link} target="_blank">{content.text}</a>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
