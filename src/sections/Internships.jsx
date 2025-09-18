import React, { useRef } from "react";
import siteData from "../data/site";
import { motion, useInView } from "framer-motion";

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="internships" ref={ref} className="py-16 bg-gray-90">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-gray-100 dark:text-white"
        >
          Internships
        </motion.h2>
        {siteData.internships.map((intern, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6}}
            className="mb-6 p-6 rounded-2xl shadow-md bg-gray-800 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold text-gray-200">{intern.role}</h3>
            <p className="text-gray-300">{intern.company}</p>
            <p className="text-sm text-gray-500">{intern.duration}</p>
            <p className="mt-2 text-gray-300 dark:text-gray-300">{intern.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
