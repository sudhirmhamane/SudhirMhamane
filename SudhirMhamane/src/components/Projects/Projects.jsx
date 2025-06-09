import React from "react";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss,SiJavascript,SiCss3 } from "react-icons/si";
import energyImg from "../../assets/recipe img.png";
import weather from "../../assets/weather.png";

const projects = [
  {
    title: "GONATIONS",
    description:
      "Developed a fully responsive web application that provides insightful facts and statistics about countries.",
    image: "project1.png",
    tech: [<FaReact size={35} />,<SiTailwindcss size={35} />,<FaGithub size={35} />],
    github: "https://github.com/sudhirmhamane/GoNations",
    demo: "https://gonations.vercel.app/",
  },
  {
    title: "RECIPE FINDER APP",
    description:
      "Worked on a recipe application leveraging TheMealDB API to provide a rich selection of international and regional recipes.",
    image: "project2.png",
    tech: [<FaHtml5 size={35} />, <SiCss3 size={35} />,<SiJavascript size={35} />,<FaGithub size={35} />],
    github: "https://github.com/sudhirmhamane/Recipe-Finder-App",
    demo: "https://recipefinder-app.vercel.app/",
  },

  {
    title: "WEATHER FORCASTER",
    description:
      "Worked on building a responsive weather forecasting application using HTML, CSS, and JavaScript.",
    image: weather,
    tech: [<FaHtml5 size={35} />, <SiCss3 size={35} />,<SiJavascript size={35} />,<FaGithub size={35} />],
    github: "https://github.com/sudhirmhamane/WeatherForecast",
    demo: "https://forecastweather.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="project" className="py-20 bg-graph text-white px-6">
      <div className="text-center mb-12 mt-12">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-blue-500">MY PROJECTS</h2>
        <p className="italic text-gray-400 mt-2">
          "A glimpse into my top projects and achievements."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-blue-500/10 border border-blue-400 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="py-2 px-2 rounded-2xl w-full h-60 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex items-center space-x-4 text-2xl text-white mb-4">
                {project.tech.map((Icon, i) => (
                  <span key={i}>{Icon}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-400 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
