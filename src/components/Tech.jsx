import React from "react";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

const Tech = () => {
  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <h1 className="text-4xl font-md text-white md:text-6xl">
        Technologies
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-10 p-5">
        <div>
          <BiLogoHtml5
            className="cursor-pointer text-[80px] text-[#E34F26] transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"
          />
        </div>

        <div>
          <BiLogoCss3
            className="cursor-pointer text-[80px] text-[#1572B6] transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"
          />
        </div>

        <div>
          <BiLogoJavascript
            className="cursor-pointer text-[80px] text-[#F7DF1E] transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"
          />
        </div>

        <div>
          <BiLogoReact
            className="cursor-pointer text-[80px] text-[#61DAFB] transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"
          />
        </div>

        <div>
          <BiLogoTailwindCss
            className="cursor-pointer text-[80px] text-[#38BDF8] transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"
          />
        </div>

        <div>
          <BiLogoGit
            className="cursor-pointer text-[80px] text-[#F05032] transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Tech;
