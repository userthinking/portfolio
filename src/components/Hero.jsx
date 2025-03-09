import React from "react";
import image from "../assets/image.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-6 py-28 md:px-12"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-white">
        {/* Profile Image */}
        <div>
          <img
            src={image}
            className="w-[250px] md:w-[300px] cursor-pointer rounded-full shadow-lg shadow-indigo-900 transition-all duration-300 
            hover:-translate-y-3 hover:scale-105 hover:shadow-indigo-600"
            alt="profile"
          />
        </div>

        {/* Text Section */}
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center ">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl font-semibold md:text-5xl">
            Bhumigari Siddhartha
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-xl font-medium md:text-2xl">
            Front-End Developer
          </h3>
          <p className="text-sm text-gray-400 md:text-base">
            I'm a frontend developer passionate about building clean,
            responsive, and user-friendly websites. I enjoy turning ideas into
            interactive web experiences using modern technologies like React,
            JavaScript, and Tailwind CSS. I love solving problems and bringing
            creative projects to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
