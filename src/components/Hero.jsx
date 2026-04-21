import React from "react";
import { HERO_CONTENT } from "../constants/data";

const Hero = () => {
  return (
    <section className=" mx-auto h-[80vh] bg-[url('./hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col justify-center items-center h-full text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-5xl -mt-12 lg:text-[4rem] font-bold uppercase tracking-tight leading-tight bg-linear-to-br  from-secondary to-white text-transparent bg-clip-text">
          {HERO_CONTENT.title}
        </h1>

        <p className="mt-4 w-[70%] text-sm md:text-lg tracking-tighter leading-tight text-gray-600 ">
          {HERO_CONTENT.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
