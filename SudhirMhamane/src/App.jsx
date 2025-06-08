import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Certificates from './components/Certificates/Certificates';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
