import React from "react";

const About = () => {
  return (
    <div>
      {/* <div
        className="h-80 bg-no-repeat bg-cover bg-center bg-opacity-20"
        style={{ backgroundImage: "url(/images/pic4.jpg)" }}
      >
        Hello World
      </div> */}
      <h1 className="font-bold text-center p-10 text-[40px] ">ABOUT US</h1>
      <div className="flex flex-wrap justify-around">
        <article className=" w-[400px] pb-10 px-6">
          {" "}
          <h3 className="font-bold text-lg pt-4">Computer Science Club</h3>
          <p>
            Computer Science Club is a student club of university of Adana Alparslan Türkeş Science and Technology University. 
            Main Subject of club is bringing together student developers of ATU.
          </p>
        </article>
        <article className=" w-[400px] pb-10 px-6">
          <h3 className="font-bold text-lg pt-4">ATU</h3>
          <p>
            {" "}
            Adana Alparslan Türkeş Science and Technology University is a state university established in Adana in 2011.
            It was established by the Law No. 6218 enacted by the Turkish Grand National Assembly on March 31, 2011. 
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
