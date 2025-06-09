import React, { useState, useEffect } from "react";
import profileImg from "../../assets/sudhipp.jpg";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "../Footer/Footer";
// import { SiUnstop } from 'react-icons/si';

const education = [
  {
    level: "10th",
    year: "2020",
    grade: "86.60",
    institute: "Graming Vidya Vikas Vidhyalay, Chapalagaon",
  },
  {
    level: "12th",
    year: "2022",
    grade: "74.67",
    institute:
      "C.B. Khedgis Basaveshwar Sci Rajavijaysingh Comm & Raja Jaysing Arts College Akkalkot",
  },
  {
    level: "Engineering",
    year: "2022–Present",
    grade: "7.22",
    institute:
      "Nagesh Karajagi Orchid College Of Engineering & Technology, Solapur",
  },
];


const About = () => {
  
  return (
    <>
      {/* About Section */}
      <section className="min-h-screen bg-graph text-white py-16 bg-graph px-6 pt-32 pb-16 grid grid-cols-1 place-items-center border-blue-600/40">


        <div className="max-w-5xl w-full">

          <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-blue-500">ABOUT ME</h2>
          <p className="italic text-gray-400 mt-2">
            "Driven by passion, powered by perseverance — that’s my journey."
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img
            src={profileImg}
            alt="Sudhir Mhamane"
            className="w-[200px] h-[320px] object-cover rounded-lg shadow-lg border-3 border-blue-500"
          />
          <div className="text-left">
            <p className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
              Hello! I'm Sudhir Mhamane, a passionate Full Stack Developer and
              Electrical Engineer from Solapur, Maharashtra. With a strong
              foundation in Java, Data Structures, and modern web technologies
              like React, Tailwind CSS, Node.js and Express.js, I bring ideas to life
              through clean, responsive, and user-friendly web applications. I enjoy solving complex problems and continuously learning new technologies to enhance my skill set.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-blue-400">
              Get Connected
            </h3>
            <div className="flex gap-5 mt-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/sudhirmhamane/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-500 transition" />
              </a>
              <a
                href="https://github.com/sudhirmhamane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-400 transition" />
              </a>
              <a href="mailto:sudhirmhamane908@gmail.com">
                <MdEmail className="hover:text-red-400 transition" />
              </a>

              <a
                href="https://unstop.com/u/SudhirM_45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="unstop (2).png"
                  alt="Unstop Profile"
                  className="w-6 h-6 object-contain "
                />
              </a>
            </div>
          </div>
        </div>
        {/* Education Timeline - Vertical Layout */}
        <div className="mb-16">
          <div className="text-center mb-8 ">
            <h2 className="mt-20 text-3xl sm:text-3xl md:text-4xl font-bold text-blue-500">MY EDUCATION</h2>
            <p className="italic text-gray-400 mt-2">
              "Education builds the path to tomorrow’s success."
            </p>
          </div>

          <div className="relative border-l-2 border-blue-500 ml-4">
            {education.map((edu, index) => (
              <div key={index} className="mb-12 ml-6 relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1.5 border-2 border-white"></div>
                <div className="bg-blue-500/10 border border-blue-400 p-4 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-blue-200">
                    {edu.level}
                  </h3>
                  <p className="text-sm text-blue-300">Year: {edu.year}</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Institute: {edu.institute}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Grade: {edu.grade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>


        
      </section>
    </>
  );
};

export default About;
