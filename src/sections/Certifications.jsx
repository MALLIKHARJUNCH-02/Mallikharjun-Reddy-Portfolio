import React from "react";
import { motion } from "framer-motion";
import siteData from "../data/site";
import Section from "../components/ui/Section";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" dim>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.06)}
        className="grid sm:grid-cols-2 gap-x-10 gap-y-5"
      >
        {siteData.certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={fadeUp}
            className="flex items-baseline justify-between gap-4 py-3 border-b border-line"
          >
            <div>
              <h3 className="text-sm font-medium text-ink">{cert.title}</h3>
              <p className="text-xs text-ink-faint mt-0.5">{cert.issuer.trim()}</p>
            </div>
            <span className="text-xs text-ink-faint shrink-0">{cert.year}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
