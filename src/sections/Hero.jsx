import React from "react";
import { motion } from "framer-motion";
import siteData from "../data/site";
import Button from "../components/ui/Button";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const focusAreas = ["Java & Spring Boot", "React & Node.js", "UI/UX Design"];

export default function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-paper">
      <div className="container-page grid lg:grid-cols-[1.3fr_0.9fr] gap-14 lg:gap-10 items-center">
        <motion.div
          initial={reduceMotion ? "show" : "hidden"}
          animate="show"
          variants={container}
        >
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl font-semibold leading-[1.12] max-w-xl text-blue-900"
          >
            {siteData.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg sm:text-xl text-ink-soft max-w-xl">
            {siteData.designation}
          </motion.p>

          <motion.p variants={item} className="mt-5 text-base leading-relaxed text-ink-soft max-w-lg">
            {siteData.tagLine}. {siteData.about}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button href="/Mallikharjun_Resume.pdf" download variant="primary">
              Download Resume
            </Button>
            <Button href="#contact" variant="outline">
              Get in touch
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href="https://www.behance.net/mallikhreddy1"
              target="_blank"
              rel="noreferrer"
              className="text-blue-950 text-ink-soft hover:text-accent hover:underline transition-colors"
            >
              Behance profile
            </a>
            {/* <span className="text-line-strong">/</span>
            <a
              href="https://link-vault-two-mauve.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className=" text-blue-950 text-ink-soft hover:text-accent hover:underline transition-colors"
            >
              LinkVault
            </a> */}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? "show" : "hidden"}
          animate="show"
          variants={container}
          className="flex flex-col items-center lg:items-end gap-6"
        >
          <motion.img
            variants={item}
            src="/profile.jpg"
            alt="Portrait of Mallikharjun Reddy Chilukuri"
            title="Mallikharjun Reddy Chilukuri"
            className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-lg border border-line"
          />
          <motion.div variants={item} className="w-full sm:w-64 border border-line rounded-lg p-5 bg-paper-dim">
            <p className="text-xs text-green-700 font-medium mb-3">Focus areas</p>
            <ul className="space-y-2 text-sm text-ink">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
