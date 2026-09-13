import React from "react";
import { motion } from "framer-motion";
import siteData from "../data/site";
import Section from "../components/ui/Section";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

const hobbies = ["Building mini projects", "Playing cricket", "Photography", "Creative editing"];
const strengths = [
  "Quick learner",
  "Problem-solving mindset",
  "Adaptable & multitasking",
  "Continuous learning focus",
];
const exploring = [
  "Java, Spring Boot & Spring Data JPA",
  "React.js & REST API development",
  "UI/UX design, design thinking & prototyping",
];

function List({ title, items }) {
  return (
    <motion.div variants={fadeUp}>
      <h3 className="text-sm font-medium text-ink mb-4">{title}</h3>
      <ul className="space-y-2.5 text-sm text-ink-soft">
        {items.map((entry) => (
          <li key={entry} className="flex gap-2.5">
            <span className="w-1 h-1 mt-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
            {entry}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="text-base sm:text-lg leading-relaxed text-ink-soft max-w-2xl">
        I’m <span className="text-ink font-medium">{siteData.name}</span>, {siteData.aboutme}
      </p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger()}
        className="mt-14 grid sm:grid-cols-3 gap-10 max-w-3xl"
      >
        <List title="Hobbies & interests" items={hobbies} />
        <List title="Strengths" items={strengths} />
        <List title="Currently exploring" items={exploring} />
      </motion.div>
    </Section>
  );
}
