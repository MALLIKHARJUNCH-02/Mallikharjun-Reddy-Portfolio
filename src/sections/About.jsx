import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import siteData from "../data/site";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className="py-16 bg-gray-950 text-white px-6 justify-center">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400"
        >
          About Me
        </motion.h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I’m <span className="text-cyan-400">{siteData.name}</span>, {siteData.aboutme}</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.7 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border-start border-1 border-info shadow"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              Hobbies & Interests
            </h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                ⚡ Building mini projects
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                🏏 Playing cricket
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                📸 Photography
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                🎨 Creative editing
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.7 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border-start border-1 border-info shadow"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              Strengths
            </h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                ✅ Quick learner
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                ✅ Problem-solving mindset
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                ✅ Adaptable & multitasking
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                ✅ Continuous learning focus
              </motion.li>
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.7 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border-start border-1 border-info shadow md:col-span-2 max-w-xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              Currently Exploring
            </h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
               ☕ Java, Spring Boot & Spring Data JPA Development
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
              ⚡ React.js & REST API Development
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
               🧠 UI/UX Design, Design Thinking & Prototyping
              </motion.li>
              
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
