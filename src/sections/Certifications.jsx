import React, { useRef } from "react";
import siteData from "../data/site";
import { motion, useInView } from "framer-motion";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="certifications" ref={ref} className="py-16 bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-gray-100"
        >
          Certifications
        </motion.h2>
        <ul className="space-y-4">
          {siteData.certifications.map((cert, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 rounded-xl shadow-md bg-gray-800 border-start border-info"
            >
              <h3 className="text-lg font-semibold text-gray-200">{cert.title}</h3>
              <p className="text-gray-400">
                {cert.issuer} • {cert.year}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
