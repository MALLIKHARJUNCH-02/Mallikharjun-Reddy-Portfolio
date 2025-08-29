import React from "react";
import siteData from "../data/site.js"
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="pt-20">
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left space-y-6">

                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Hi, I'm <span className="text-cyan-400">{siteData.name}</span>
                    </motion.h1>


                    <motion.h2
                        initial={{ opacity: 0, y: -30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-semibold text-gray-300">
                        {siteData.designation}
                    </motion.h2>
                    <p className="text-gray-400 max-w-xl">
                        {siteData.about}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <motion.a
                            initial={{ opacity: 0, y: -30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            href="/Mallikharjun_Resume.pdf"
                            download
                            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-medium shadow-lg"
                        >
                            Download CV
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: -30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            href="#contact"
                            className="bg-gray-800 hover:bg-gray-700 border border-gray-600 px-6 py-3 rounded-xl font-medium"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </div>

                {/* Right Content (Image) */}
                <div className="flex-1 flex justify-center mt-10 md:mt-0">

                    <motion.img
                        src="/profile.jpg"
                        alt="Profile"
                        initial={{ opacity: 0, y: -30, scale: 0.1 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-cyan-500"
                    />

                </div>
            </section>

        </div>
    );
};

export default Hero;
