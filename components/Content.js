
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import {CiFacebook} from "react-icons/ci"
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "ZIA",
    LastName: "ULLAH",
    btnText: "Hire Me",
    image: "/images/hero1.png",
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Tailwind",
        para: "Lorem ipsum text  dummy",
        logo: "/images/tailwind.png",
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: "/images/node.png",
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: "/images/ps.png"
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: "/images/react.png",
      },
     
      {
        name: "Next js",
        para: "Lorem ipsum text  dummy",
        logo: "/images/next.js.png",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder placeholder Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean document elying on mean",
        logo: "/images/logo1.png",
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder placeholder Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean document elying on mean",
        logo: "/images/logo2.png",
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder placeholder Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean document elying on mean",
        logo: "/images/logo3.png",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: "/images/hero1.png",
    project_content: [
      {
        title: "Gym Website",
        image: "/images/img1.png",
      },
      {
        title: "Social Media web",
        image: "/images/img2.png",
      },
      {
        title: "Creative Website",
        image: "/images/img3.png",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: "/images/avatar1.png",
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: "/images/avatar2.png",
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: "/images/avatar3.png",
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: "/images/avatar4.png",
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: "/images/hero1.png",
    image2: "Hireme_person2",
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ziaullah667773@gmail.com",
        icon: GrMail,
        link: "mailto:ziaullah667773@gmail.com",
      },
      {
        text: "+92 3339499778",
        icon: MdCall,
        link: "https://wa.me/03339499778",
      },
      {
        text: "ziaullah",
        icon: CiFacebook,
        link: "https://web.facebook.com/xia.10441/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
