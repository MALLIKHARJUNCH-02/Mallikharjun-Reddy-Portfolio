import React from "react";
import { motion } from "framer-motion";
const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-950 text-white px-6">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-cyan-400">
                    About Me
                </motion.h2>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    I am <span className="text-cyan-400">Chilukuri Mallikharjun Reddy</span>,
                    a passionate Full Stack Developer who enjoys learning new things and
                    building modern, responsive applications. My strengths are{" "}
                    <span className="text-cyan-400">multitasking</span> and being a{" "}
                    <span className="text-cyan-400">quick learner</span>.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: -30, scale: 0.7 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                            Hobbies & Interests
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >⚡ Creating mini projects</motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >🏏 Playing cricket</motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >📸 Photography</motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >🎨 Editing</motion.li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -30, scale: 0.7 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }} className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                            Strengths
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >✅ Quick learner</motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >✅ Multitasking</motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >✅ Strong problem-solving skills</motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >✅ Passion for continuous learning</motion.li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
