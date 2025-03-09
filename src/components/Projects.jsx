import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

const Projects = () => {
  const projectsData = [
    {
      image: image1,
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform with product listings, shopping cart, user authentication, and payment gateway integration. Built using the MERN stack for a seamless shopping experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      image: image2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase projects, skills, and achievements. Features smooth animations, responsive design, and a contact form for inquiries.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    },
    {
      image: image3,
      title: "Blog Website",
      description:
        "A dynamic blog platform with user authentication, markdown support, and a content management system for writing and publishing articles in real-time.",
      technologies: ["Next.js", "Tailwind", "GraphQL", "Firebase"],
    },
    {
      image: image4,
      title: "Restaurant Website",
      description:
        "An interactive restaurant website with an online menu, table booking system, and customer reviews. Optimized for both desktop and mobile users.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
      image: image5,
      title: "Admin Dashboard",
      description:
        "A modern admin dashboard with data visualization, user management, and analytics tracking. Includes role-based authentication and real-time updates.",
      technologies: ["React", "Tailwind", "Docker", "MySQL"],
    },
  ];

  const ProjectCard = ({ project }) => {
    return (
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt="img"
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>

            <div className="flex flex-wrap gap-5">
              {project.technologies.map((item, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-medium text-white md:text-6xl">
        My Projects
      </h1>

      <div className="flex max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
