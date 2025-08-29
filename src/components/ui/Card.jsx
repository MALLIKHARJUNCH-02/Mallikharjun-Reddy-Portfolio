import React from "react";
import { motion } from "framer-motion";

export default function Card({ title, subtitle, description, children }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-white/80 shadow-lg backdrop-blur border border-gray-200"
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      {description && <p className="mt-2 text-gray-700">{description}</p>}
      {children && <div className="mt-3">{children}</div>}
    </motion.div>
  );
}
