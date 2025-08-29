import React from "react";
import { motion } from "framer-motion";

export default function Button({ children, onClick, href, download, variant = "primary" }) {
  const baseStyles =
    "inline-block px-6 py-2 rounded-2xl font-medium shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
  };

  const cls = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        href={href}
        download={download}
        className={cls}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cls}
    >
      {children}
    </motion.button>
  );
}
