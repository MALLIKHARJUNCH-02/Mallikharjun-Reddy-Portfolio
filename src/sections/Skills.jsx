import React from "react";
import { motion } from "framer-motion";
import siteData from "../data/site";
import { useRef } from "react";
import { useInView } from "framer-motion";
// const skills = [
//   "Java", "C", "C++", "Python", "React.js",
//   "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TailwindCSS"
// ];

export default function Skills() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-gray-800"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {siteData.skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-3 bg-white shadow rounded-2xl text-gray-700 font-medium hover:bg-blue-100"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}