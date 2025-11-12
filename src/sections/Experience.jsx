import React, { useRef } from "react";
import siteData from "../data/site";
import { motion, useInView } from "framer-motion";

// 🔹 Helper function to calculate duration dynamically
const calculateDuration = (fromMonth, fromYear, toMonth, toYear) => {
    const monthIndex = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    const start = new Date(fromYear, monthIndex[fromMonth]);
    const end =
        toMonth?.toLowerCase() === "present"
            ? new Date() // Current date
            : new Date(toYear, monthIndex[toMonth]);

    let months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let duration = "";
    if (years > 0) duration += `${years} year${years > 1 ? "s" : ""} `;
    if (remainingMonths > 0)
        duration += `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
    if (!duration) duration = "Less than a month";

    return duration.trim();
};

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="experience" ref={ref} className="py-16 bg-gray-900">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-10 text-white"
                >
                    Experience
                </motion.h2>

                {siteData.experience.map((exp, index) => {
                    // Format date range
                    const dateRange =
                        exp.toMonth?.toLowerCase() === "present"
                            ? `${exp.fromMonth} ${exp.fromYear} – Present`
                            : `${exp.fromMonth} ${exp.fromYear} – ${exp.toMonth} ${exp.toYear}`;

                    // Calculate dynamic duration
                    const duration = calculateDuration(
                        exp.fromMonth,
                        exp.fromYear,
                        exp.toMonth,
                        exp.toYear
                    );

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="mb-6 p-6 rounded-2xl shadow-md bg-gray-800"
                        >
                            <h3 className="text-xl font-semibold text-cyan-400">
                                {exp.role}
                            </h3>
                            <p className="text-gray-300">{exp.company}</p>

                            {/* 💡 Combine date range and duration inline */}
                            {exp.type && (
                                <p className="text-sm text-gray-400 italic mb-1">{exp.type}</p>
                            )}

                            <p className="text-sm text-gray-500 mb-2">
                                {dateRange} • {duration}
                            </p>

                            <p className="text-gray-300">{exp.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
