import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./ui/Button";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "internships", label: "Internships" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg shadow z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 flex justify-between items-center h-16">
        <a href="/" className="font-bold text-lg text-indigo-600">
          Mallikharjun
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-800 hover:text-indigo-600 transition"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/Mallikharjun_Resume.pdf" download>
            Download CV
          </Button>
        </div>
        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="material-icons">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="block text-gray-800 hover:text-indigo-600 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/assets/Mallikharjun_Resume.pdf" download>
            Download CV
          </Button>
        </div>
      )}
    </nav>
  );
}
