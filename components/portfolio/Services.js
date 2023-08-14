import React from "react";
import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="text-5xl font-bold font-[poppins] text-dark_primary">
          {services.title}
        </h2>
        <h4 className="md:text-4xl text-3xl !leading-relaxed font-Paprika text-gray-400">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
            >
              <img src={content.logo} alt="" className="mx-auto" />
              <h6 className="font-Paprika font-bold text-lg text-[#253D57] leading-8 my-3">
                {content.title}
              </h6>
              <p className="text-lg text-dark_primary font-[poppins]   leading-7 ">
                {content.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
