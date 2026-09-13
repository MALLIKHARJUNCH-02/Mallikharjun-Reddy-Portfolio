import React, { useMemo } from "react";
import { motion } from "framer-motion";
import siteData from "../data/site";
import skillGroups from "../data/skillGroups";
import Section from "../components/ui/Section";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export default function Skills() {
  const grouped = useMemo(() => {
    const used = new Set();
    const groups = skillGroups.map((group) => {
      const items = siteData.skills.filter((skill) => group.match.includes(skill));
      items.forEach((s) => used.add(s));
      return { label: group.label, items };
    });
    const rest = siteData.skills.filter((s) => !used.has(s));
    if (rest.length) groups.push({ label: "Other", items: rest });
    return groups.filter((g) => g.items.length);
  }, []);

  return (
    <Section id="skills" title="Skills" dim>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger()}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10"
      >
        {grouped.map((group) => (
          <motion.div key={group.label} variants={fadeUp}>
            <h3 className="text-sm font-medium text-ink mb-4">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-ink-soft border border-line rounded px-3 py-1.5 bg-paper hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
