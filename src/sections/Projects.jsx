import React from "react";
import siteData from "../data/site";
import { motion } from "framer-motion";
const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-10 text-gray-100">
                    Projects
                </motion.h2>
                <div className="grid sm:grid-cols-2 gap-8">
                    {siteData.projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            key={index} className="p-6 rounded-2xl shadow-md bg-gray-800 dark:bg-gray-800">
                            <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                            <p className="mt-2 text-gray-300 dark:text-gray-300">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline">
                                View Project →
                            </a>
                            {project.livelink && (
                                <a
                                    href={project.livelink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block m-4 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    View live →
                                </a>
                            )}

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
