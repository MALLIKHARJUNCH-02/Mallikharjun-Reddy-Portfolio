import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../../lib/cn";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function Section({ id, title, dim = false, className, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-20 sm:py-24 scroll-mt-20", dim ? "bg-paper-dim" : "bg-paper", className)}
    >
      <div className="container-page">
        {title && (
          <motion.h2
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeUp}
            className="section-heading mb-12"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
