import React, { useState, useEffect } from "react";
import profileImg from "../../assets/sudhirpfp.png";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Certificates from "../Certificates/Certificates";

import { Link } from "react-router-dom";

const Home = () => {
  const texts = [
    "Full Stack Developer",
    "Tech Enthusiast",
    "Elect Engineer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 800);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  useEffect(() => {
    setText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <>
      {/* Home Section */}
      <section className="min-h-screen pt-24 flex flex-col items-center justify-center px-4 text-center bg-graph text-white">
        <img
          src={profileImg}
          alt="Sudhir Mhamane"
          className="w-48 h-48 rounded-full object-cover border-2 border-blue-500 shadow-lg mb-6"
        />

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4 mb-5">
            I'm Sudhir Mhamane - A
          </h1>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4 flex flex-wrap justify-center items-center gap-2">
          <span className="text-blue-400 inline-block min-w-[190px] text-left">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="max-w-2xl mt-6 text-lg text-gray-300">
          I am a Full Stack Developer from Solapur, Maharashtra. I specialize in
          creating beautiful, responsive, and fast websites. I have worked on
          various projects ranging from small websites to large-scale web
          applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <Link
            to="/contact"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Connect
          </Link>
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

      {/* Other Sections */}
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
};

export default Home;
