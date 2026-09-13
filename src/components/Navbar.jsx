import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";
import { cn } from "../lib/cn";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "internships", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <a
          href="/"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-line-strong text-sm font-display font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
          aria-label="Home"
        >
          MR
        </a>

        <div className="hidden lg2:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={500}
              offset={-70}
              spy
              activeClass="text-ink"
              className="cursor-pointer text-sm text-ink-soft hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/Mallikharjun_Resume.pdf" download variant="outline" className="text-sm py-2">
            Resume
          </Button>
        </div>

        <button
          className="lg2:hidden inline-flex items-center justify-center w-9 h-9 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2.5 5.5H17.5M2.5 10H17.5M2.5 14.5H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg2:hidden overflow-hidden bg-paper border-b border-line"
          >
            <div className="container-page py-6 flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth
                  duration={500}
                  offset={-70}
                  className="text-base text-ink-soft hover:text-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/Mallikharjun_Resume.pdf" download variant="outline" className="w-fit">
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
