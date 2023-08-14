import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
const Project = () => {
  const projects = [
    {
      src: "/portfolio",
      name: "Portfolio",
      github_link: "",
      live_link: "/portfolio",
    },
    {
      src: "/schoolmanagementsystem",
      name: "School Management System",
      github_link: "",
      live_link: "/schoolmanagementsystem",
    },
    {
      src: "/portfolio",
      name: "Mart Management System",
      github_link: "",
      live_link: "/portfolio",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 text-lg mt-3">My awesome work</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  {/* <img src={project_info.img} alt="image" className="rounded-lg" /> */}
                  <iframe
                    src={project_info.src}
                    height={"270px"}
                    width={"330px"}
                    onClick={() =>
                      window.parent.postMessage(
                        { type: "iframe-click", src: "/portfolio" },
                        "*"
                      )
                    }
                    className="rounded-lg "
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <Image
            src="/images/hero1.png "
            alt=""
            width={500}
            height={600}
            className="h-96 w-96"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Project;
