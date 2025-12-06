import React from "react";
import siteData from "../data/site";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section id="projects" ref={ref} className="py-16 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-10 text-gray-100">
                    Projects
                </motion.h2>
                <div className="grid sm:grid-cols-2 gap-8">
                    {siteData.projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            key={index} className="p-6 rounded-2xl shadow-md bg-gray-800 dark:bg-gray-800 border-start border-1 border-info shadow">
                            <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                            <p className="mt-2 text-gray-300 dark:text-gray-300">{project.description}</p>

                            <button type="button" className="m-4 btn btn-outline-info"><a href={project.link} target="_blank" rel="noopener noreferrer"
                                className="inline-block hover:underline">
                                📦 Source Code
                            </a></button>
                            {project.livelink && (
                               

                                <button type="button" className="m-4 btn btn-outline-info"><a
                                    href={project.livelink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:underline"
                                >
                                    🌐 Live Demo
                                </a></button>
                            )}

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
