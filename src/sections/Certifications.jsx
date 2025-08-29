import React from "react";
import siteData from "../data/site";
import { motion } from "framer-motion";
const Certifications = () => {
    return (
        <section id="certifications" className="py-16 bg-gray-950">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                    Certifications
                </motion.h2>
                <ul className="space-y-4">
                    {siteData.certifications.map((cert, index) => (
                        <motion.li
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                             key={index} 
                             className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800">
                            <h3 className="text-lg font-semibold">{cert.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
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
