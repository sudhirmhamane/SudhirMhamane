import React, { useState, useEffect } from "react";
import profileImg from "../../assets/sudhirpfp.png";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Certificates from "../Certificates/Certificates";

const Home = () => {
  const texts = ["Web Developer", "Tech Enthusiast", "Elect Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Home Section */}
      <section className="min-h-screen pt-24 flex flex-col items-center justify-center px-4 text-center bg-graph text-white">
        <img
          src={profileImg}
          alt="Sudhir Mhamane"
          className="w-48 h-48 rounded-full object-cover border-2 border-blue-500 shadow-lg mb-6"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4 flex flex-wrap justify-center items-center gap-2">
          <span className="whitespace-nowrap">I'm Sudhir Mhamane - A</span>
          <span
            key={texts[index]}
            className="text-blue-400 whitespace-nowrap transition-opacity duration-700 ease-in-out sm:ml-2 sm:inline-block block"
            style={{ opacity: 1 }}
          >
            {texts[index]}
          </span>
        </h1>

        <p className="max-w-2xl mt-6 text-lg text-gray-300">
          I am a Full Stack Developer from Solapur, Maharashtra. I specialize in
          creating beautiful, responsive, and fast websites. I have worked on
          various projects ranging from small websites to large-scale web
          applications.
        </p>

        <div className="mt-8 flex gap-6">
          <a
            href="/contact"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Connect
          </a>
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Add About and Skills Sections */}
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
};

export default Home;
