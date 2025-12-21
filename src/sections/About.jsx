import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
          I’m <span className="text-cyan-400">Chilukuri Mallikharjun Reddy</span>, a passionate Full Stack Developer specializing in clean, scalable, and user-focused web applications. I enjoy solving problems through modern technologies like React.js, Node.js, and responsive design. I have practical experience in both front-end and back-end development and a strong foundation in UI/UX fundamentals, including wireframing and prototyping.

I thrive on learning new tools, collaborating with teams, and building solutions that are both efficient and intuitive.
        </p>

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
               🧠 UI/UX fundamentals & prototyping
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
              ⚡ React performance & component optimization
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
               🔧 Scalable backend patterns with Node.js
              </motion.li>
              
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
