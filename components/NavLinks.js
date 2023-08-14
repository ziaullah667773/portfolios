import Link from "next/link";
import React, { useState } from "react";
import { links } from "./MyLinks";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      
      {links.map((link) => (
        <div key={link?.name}>
          <div className="px-3 text-left md:cursor-pointer group ">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <FiChevronUp /> : <FiChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 ">
                <FiChevronDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1.5 bg-gray-900 rotate-45"></div>
                  </div>
                  <div className="bg-gray-900 p-5 rounded-lg shadow-lg shadow-slate-500 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold text-gray-300">
                          {mysublinks.Head}
                        </h1>
                        {/* {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-400 my-2.5">
                            <Link
                              href={slink.link}
                              className="hover:text-blue-600"
                            >
                            {slink.name}
                            </Link>
                          </li>
                        ))} */}
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-sm text-gray-400 my-2.5"
                            key={slink.name}
                          >
                              <Link href={slink.link} className="hover:text-blue-600">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile menus */}

          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center "
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.name}>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
