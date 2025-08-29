import React from "react";
import siteData from "../data/site";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-gray-100">
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gray-200 mb-4">
          Feel free to reach out for opportunities or collaborations.
        </motion.p>
        <div className="space-y-2">
          <p><a href={`mailto:${siteData.contact.email}`} className="text-blue-600 dark:text-blue-400">{siteData.contact.email}</a></p>
          <p>{siteData.contact.phone}</p>
          <p><a href={siteData.contact.linkedin} target="_blank" className="text-blue-600 dark:text-blue-400">LinkedIn</a></p>
          <p><a href={siteData.contact.github} target="_blank" className="text-blue-600 dark:text-blue-400">GitHub</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
