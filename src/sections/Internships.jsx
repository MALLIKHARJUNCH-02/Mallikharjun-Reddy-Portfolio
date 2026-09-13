import React from "react";
import { motion } from "framer-motion";
import siteData from "../data/site";
import Section from "../components/ui/Section";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

const getDuration = (startDate, endDate) => {
  if (!startDate || !endDate) return null;

  const start = new Date(startDate);
  const end = endDate === "present" ? new Date() : new Date(endDate);

  let months = end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear());

  if (months <= 0) months = 1;

  return `${months} month${months > 1 ? "s" : ""}`;
};

const formatDate = (date) => {
  if (!date) return null;
  if (date === "present") return "Present";

  const options = { year: "numeric", month: "short" };
  return new Date(date).toLocaleDateString("en-US", options);
};

export default function Internships() {
  return (
    <Section id="internships" title="Experience" dim>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.1)}
        className="max-w-3xl"
      >
        {siteData.internships.map((intern, index) => {
          const start = formatDate(intern.startDate);
          const end = formatDate(intern.endDate);
          const duration = getDuration(intern.startDate, intern.endDate);
          const isLast = index === siteData.internships.length - 1;

          return (
            <motion.div key={intern.company} variants={fadeUp} className="relative pl-8 pb-10 last:pb-0">
              {!isLast && <span className="absolute left-[5px] top-3 bottom-0 w-px bg-line" aria-hidden="true" />}
              <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />

              <h3 className="text-lg font-medium text-ink">{intern.role}</h3>
              <p className="text-sm text-ink-soft mt-0.5">{intern.company}</p>

              {start && end && (
                <p className="text-xs text-ink-faint mt-1.5">
                  {start} – {end}
                  {duration && <span className="text-accent"> ({duration})</span>}
                </p>
              )}

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{intern.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
