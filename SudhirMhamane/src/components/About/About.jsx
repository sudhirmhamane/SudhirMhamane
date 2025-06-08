import React, { useState, useEffect } from "react";
import profileImg from "../../assets/sudhipp.jpg";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "../Footer/Footer";
// import { SiUnstop } from 'react-icons/si';

const About = () => {
  const texts = [
    "Electrical Engineer",
    "Full Stack Developer",
    "Tech Enthusiast",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* About Section */}
      <section className="min-h-screen bg-graph text-white py-16 px-6">
        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl font-bold text-blue-500">ABOUT ME</h2>
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
              like React, Tailwind CSS, and Spring Boot, I bring ideas to life
              through clean, responsive, and user-friendly web applications. I
              have a year of experience building scalable and maintainable
              software, and I enjoy solving complex problems and continuously
              learning new technologies to enhance my skill set.
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
      </section>
    </>
  );
};

export default About;
