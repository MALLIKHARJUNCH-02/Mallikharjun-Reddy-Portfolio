import React from "react";
import siteData from "../data/site";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" ref={ref} className="py-16 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-gray-100">
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30, scale: 0.1 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gray-200 mb-4">
          Feel free to reach out for opportunities or collaborations.
        </motion.p>
        <div className="space-y-2">

          <p>{siteData.contact.phone}</p>

          <div className="d-flex justify-center">
            <p><a href={`mailto:${siteData.contact.email}`} className="text-blue-600 dark:text-blue-400"><FaEnvelope className="inline mr-2 text-3xl" /></a></p>
            <p><a href={siteData.contact.linkedin} target="_blank" className="text-blue-600 dark:text-blue-400"><FaLinkedin className="inline mr-2 text-3xl" /></a></p>
            <p><a href={siteData.contact.github} target="_blank" className="text-blue-600 dark:text-blue-400"><FaGithub className="inline mr-2 text-3xl" /></a></p>
            {/* <p><a href={`mailto:${siteData.contact.zohoemail}`} className="text-blue-600 dark:text-blue-400"><FaEnvelope className="inline text-3xl" /> <span className="fw-bold">Zoho Mail</span></a></p> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
