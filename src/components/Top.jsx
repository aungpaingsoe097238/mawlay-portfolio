import React from "react";
import "../assets/css/button89.css";
import { FaFacebook, FaInstagram, FaGithub, FaMouse } from "react-icons/fa";

const Top = () => {
  return (
    <div
      className="h-screen flex justify-center items-center relative top "
    >

      <div className=" text-center ">
        <div className=" text-3xl md:text-4xl font-bold text-white mb-3 ">
          Khaing Zar Ni Maw
        </div>
        <div className=" text-white mb-3 ">welcome to my site</div>
        <button role="button" className="button-89">
          Download CV
        </button>
        {/* Abosolute */}
        <div className=" md:absolute left-10 bottom-[35%] mt-5 ">
          <ul className="flex justify-center md:flex-col  gap-5 ">
            <li>
              <FaFacebook className=" text-2xl text-white shadow-sm cursor-pointer " />
            </li>
            <li>
              <FaInstagram className=" text-2xl text-white shadow-sm cursor-pointer " />
            </li>
            <li>
              <FaGithub className=" text-2xl text-white shadow-sm cursor-pointer " />
            </li>
          </ul>
        </div>
      </div>

      <div className=" absolute bottom-5 text-2xl text-white animate-bounce ">
        <FaMouse />
      </div>

    </div>
  );
};

export default Top;
