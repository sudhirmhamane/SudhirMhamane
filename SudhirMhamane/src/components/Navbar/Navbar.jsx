import React, { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed 
        top-4 left-4 right-4 
        z-50 
        bg-blue-900/30 
        backdrop-blur-md 
        rounded-xl
        border border-blue-600/40
        p-4
      "
      style={{ margin: "8px" }}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-white cursor-pointer">
          <Rocket className="w-7 h-7 text-blue-400" />
          <Link
            to="/"
            className="text-white text-xl font-bold transition hover:text-blue-300"
          >
            SudhirMhamane
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-bold transition hover:text-blue-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-bold transition hover:text-blue-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white text-lg font-bold transition hover:text-blue-300"
          >
            Project
          </Link>
          <Link
            to="/certificates"
            className="text-white text-lg font-bold transition hover:text-blue-300"
          >
            Certificates
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-bold transition hover:text-blue-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500/30 px-6 py-4 space-y-4 rounded-b-xl">
          <Link
            to="/"
            className="block text-white hover:text-blue-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-blue-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block text-white hover:text-blue-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/certificates"
            className="block text-white hover:text-blue-300"
          >
            Certificates
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-blue-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
