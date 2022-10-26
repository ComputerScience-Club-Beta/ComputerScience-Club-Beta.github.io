import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Management = () => {
  return (
    <div className="flex flex-wrap justify-around py-10">
      <div className="w-48 border-2 border-black rounded-md pb-4 ">
        <img
          className="ml-12 my-4 w-20 h-20 rounded-full"
          src="./images/pic8.jpg"
          alt=""
        />
        <h3 className="text-center font-bold text-md">Eren Karadeniz</h3>
        <h4 className=" text-center text-sm text-gray-700  ">
          cbc yonetim baskani
        </h4>
        <div className="flex flex-wrap justify-between mx-10 my-4">
          <a href="http://">
            {" "}
            <FiLinkedin></FiLinkedin>
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
      <div className="w-48 border-2 border-black rounded-md pb-4 ">
        <img
          className="ml-12 my-4 w-20 h-20 rounded-full"
          src="./images/pic8.jpg"
          alt=""
        />
        <h3 className="text-center font-bold text-md">Mert Metin Erdemli</h3>
        <h4 className=" text-center text-sm text-gray-700  ">baskan yrd</h4>
        <div className="flex flex-wrap justify-between mx-10 my-4">
          <a href="http://">
            {" "}
            <FiLinkedin></FiLinkedin>
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
      <div className="w-48 border-2 border-black rounded-md pb-4 ">
        <img
          className="ml-12 my-4 w-20 h-20 rounded-full"
          src="./images/pic8.jpg"
          alt=""
        />
        <h3 className="text-center font-bold text-md">Ulaş Deniz Çakmazel</h3>
        <h4 className=" text-center text-sm text-gray-700  ">
          cbc yonetim kurulu uyesi
        </h4>
        <div className="flex flex-wrap justify-between mx-10 my-4">
          <a href="http://">
            {" "}
            <FiLinkedin></FiLinkedin>
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
      <div className="w-48 border-2 border-black rounded-md pb-4 ">
        <img
          className="ml-12 my-4 w-20 h-20 rounded-full"
          src="./images/pic8.jpg"
          alt=""
        />
        <h3 className="text-center font-bold text-md">Ömer Can Dizidar</h3>
        <h4 className=" text-center text-sm text-gray-700  ">
          yonetim kurulu uysei
        </h4>
        <div className="flex flex-wrap justify-between mx-10 my-4">
          <a href="http://">
            {" "}
            <FiLinkedin></FiLinkedin>
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
      </div>{" "}
      <div className="w-48 border-2 border-black rounded-md pb-4 ">
        <img
          className="ml-12 my-4 w-20 h-20 rounded-full"
          src="./images/pic8.jpg"
          alt=""
        />
        <h3 className="text-center font-bold text-md">Emre Ayık</h3>
        <h4 className=" text-center text-sm text-gray-700  ">
          cbc yonetim kurulu uyesi
        </h4>
        <div className="flex flex-wrap justify-between mx-10 my-4">
          <a href="http://">
            {" "}
            <FiLinkedin></FiLinkedin>
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

export default Management;
