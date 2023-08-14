import React, { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth:"23rem",
    width:"90% ",
  },
  overlay:{
    padding:"2rem",
  }
};

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectSkill,setSelectSkill]=useState(null);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <section id="skills" className="min-h-fit bg-bg_light_primary">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="" />
          <h6 className="font-Paprika font-bold text-[#253D57] leading-8">{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins md:text-lg text-sm !leading-7">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit ame.</li>
          <li>Lorem ipsum dolor sit amet consectetur .</li>
          <li>Lorem ipsum dolor sit amet amet consectetur 
            adipisicing.</li>
          <li>Lorem ipsum dolor sit amet amet consectetur adipisicing adipisicing.</li>
         
        </ul>
        <br />
        <div className="flex justify-end">
        <button onClick={closeModal} className="btn">Close</button>
        </div>
      </Modal>

      <div className="md:container px-5 py-14">
        <h2 className="md:text-5xl text-3xl font-bold font-Inria text-dark_primary">
          {skills.title}
        </h2>
        <h4 className="md:text-4xl text-3xl !leading-relaxed font-Paprika text-gray-400">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt=""
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6 className="font-Paprika font-bold text-[#253D57] leading-8">
                  {skill.name}
                </h6>
                <p className="text-[0.95rem] text-dark_primary font-[poppins] italic">
                  {skill.para}
                </p>
                <div onClick={()=>{
                  setSelectSkill(skill)
                  openModal()
                }} className="text-xl top-3 right-3 absolute">
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
