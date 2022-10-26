import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const footer = () => {
  return (
    <div className="bg-zinc-700 flex flex-wrap justify-between pb-6">
      <div className="text-zinc-300 pt-6 px-14 text-sm ">
        <h3 className="font-bold text-lg  py-1">Computer Science Club</h3>

        <a href="https://www.atu.edu.tr/#!/">
          <h3 className="text-gray-zinc-500 py-1 ">
            Alparslan Türkeş Science and Technology Universty
          </h3>
        </a>
        <h3 className="">Lorem, ipsum dolor.</h3>
        <h3 className="">sth</h3>
      </div>
      <div className=" pt-6 px-14 text-lg text-zinc-300">
        <h3 className="">Connect with us</h3>

        <div
          className="flex flex-wrap text-lg justify-around pt-2
        "
        >
          <a href="http://">
            {" "}
            <FiLinkedin></FiLinkedin>
          </a>

          <a href="http://">
            {" "}
            <FiGithub></FiGithub>
          </a>
          <a href="http://">
            {" "}
            <FiMail></FiMail>
          </a>
          <a href="http://">
            {" "}
            <FaInstagram></FaInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
