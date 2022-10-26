import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <div className="">
        <header className="pt-4 pb-2 flex flex-wrap justify-between border-b-2">
          <div className="flex flex-wrap items-center ">
            <img src="./images/logo.jpg" alt="" className="w-14 h-8 ml-4 " />
            <div className="ml-4">
              <h3 className="font-bold text-lg mt-1">Computer Science Club</h3>
              <h6 className="text-xs mb-1">
                Adana Universty of Science&Technology
              </h6>
            </div>
          </div>
          <div className="flex flex-wrap items-center  ">
            <Link
              to="./home"
              className="font-bold text-lg hover:border-b-2 p-2  mx-2"
            >
              Home
            </Link>

            <Link
              to="./about"
              className="font-bold text-lg hover:border-b-2 p-2  mx-2"
            >
              About
            </Link>

            <Link
              to="./events"
              className="font-bold text-lg hover:border-b-2 p-2  mx-2"
            >
              Events
            </Link>
            <Link
              to="./management"
              className="font-bold text-lg hover:border-b-2 p-2  mx-2"
            >
              Management
            </Link>
            <Link
              to="./contact"
              className="font-bold text-lg hover:border-b-2 p-2  mx-2"
            >
              Contact
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default navbar;
