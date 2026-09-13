import React from "react";
import { motion } from "framer-motion";
import siteData from "../data/site";
import Section from "../components/ui/Section";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.1)}
        className="max-w-3xl divide-y divide-line"
      >
        {siteData.education.map((edu) => (
          <motion.div key={edu.degree} variants={fadeUp} className="py-6 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-medium text-ink">{edu.degree}</h3>
             <span className="text-xs text-ink-faint shrink-0">{edu.year}</span>
            </div>
             <span className="text-xs text-ink-faint shrink-0">Cgpa: {edu.cgpa}</span>
            <p className="text-sm text-ink-soft mt-1">{edu.institution}</p>
            {edu.affiliated && <p className="text-sm text-ink-soft">Affiliated to {edu.affiliated}</p>}
            {edu.description && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{edu.description}</p>}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
