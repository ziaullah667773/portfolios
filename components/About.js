import React from "react";
import Image from "next/image";


const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Years Completed Projects", count: "10" },
    { text: "Componies Work", count: "06" },
  ];
  return (
    <> 
     
    <section id="about" className=" min-h-screen py-10 text-white bg-gray-800">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify loading-7 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
                incidunt! Cumque eligendi qui in sit facere ipsum, sed eum quas
                molestias earum voluptates repellat esse iste aut assumenda
                culpa nemo?
              </p>
              <div className="flex mt-10 items-center gap-7 ">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={'./public/images/zia.pdf' } download>
              <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex items-center justify-center ">
            <div className="lg:w-[350px] h-full relative sm:w-10/12 w-11/12 max-w-sm aboutimg mb-2">
            <Image src="/images/hero1.png" alt="" width={500} height={500} className="w-full h-[500px] object-cover bg-cyan-600 rounded-xl" />

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
