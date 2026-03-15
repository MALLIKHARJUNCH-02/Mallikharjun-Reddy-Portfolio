import React, { useRef } from "react";
import siteData from "../data/site";
import { motion, useInView } from "framer-motion";

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getDuration = (startDate, endDate) => {
    if (!startDate || !endDate) return null;

    const start = new Date(startDate);
    const end = endDate === "present" ? new Date() : new Date(endDate);

    let months =
      end.getMonth() -
      start.getMonth() +
      12 * (end.getFullYear() - start.getFullYear());

    if (months <= 0) months = 1;

    return `${months} month${months > 1 ? "s" : ""}`;
  };

  const formatDate = (date) => {
    if (!date) return null;
    if (date === "present") return "Present";

    const options = { year: "numeric", month: "short" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <section id="internships" ref={ref} className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-white"
        >
          Internships
        </motion.h2>

        {siteData.internships.map((intern, index) => {
          const start = formatDate(intern.startDate);
          const end = formatDate(intern.endDate);
          const duration = getDuration(intern.startDate, intern.endDate);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-6 p-6 rounded-2xl shadow-md bg-gray-800 border-1 border-info"
            >
              <h3 className="text-xl font-semibold text-gray-100">
                {intern.role}
              </h3>

              <p className="text-gray-300">{intern.company}</p>

              {start && end && (
                <p className="text-sm text-gray-400 mt-1">
                  {start} – {end} • <span className="text-blue-400">{duration}</span>
                </p>
              )}

              <p className="mt-3 text-gray-300">{intern.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Internships;