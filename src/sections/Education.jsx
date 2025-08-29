import React from "react";
import siteData from "../data/site";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="py-16 bg-gray-950">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                    Education
                </motion.h2>
                {siteData.education.map((edu, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        key={index} className="mb-6 p-6 rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-200">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
