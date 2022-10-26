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
      <h1 className="font-bold text-center p-10 text-[40px] ">ABOUT</h1>
      <div className="flex flex-wrap justify-around">
        <article className=" w-[400px] pb-10 px-6">
          {" "}
          <h3 className="font-bold text-lg pt-4">Lorem, ipsum.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, aliquid id. Assumenda neque qui veniam voluptatum
            repellat commodi, facere pariatur dolorum nam ipsum dignissimos
            ipsa, doloribus labore repellendus sequi omnis!
          </p>
        </article>
        <article className=" w-[400px] pb-10 px-6">
          <h3 className="font-bold text-lg pt-4">Lorem, ipsum.</h3>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, aliquid id. Assumenda neque qui veniam voluptatum
            repellat commodi, facere pariatur dolorum nam ipsum dignissimos
            ipsa, doloribus labore repellendus sequi omnis!
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
