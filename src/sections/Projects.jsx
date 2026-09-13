import React from "react";
import { motion } from "framer-motion";
import siteData from "../data/site";
import Section from "../components/ui/Section";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import ArrowLink from "../components/ui/ArrowLink";

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group p-6 rounded-lg border border-line bg-paper hover:border-line-strong hover:shadow-card-hover transition-all duration-300"
    >
      <h3 className="text-lg font-medium text-ink leading-snug">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.description}</p>

      <div className="mt-6 flex items-center gap-5 pt-4 border-t border-gray-500">
        <ArrowLink href={project.link}>Source</ArrowLink>
        {project.livelink && <ArrowLink href={project.livelink}>Live demo</ArrowLink>}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger()}
        className="grid sm:grid-cols-2 gap-6"
      >
        {siteData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
