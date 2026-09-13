import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none";

const variants = {
  primary: "bg-ink text-paper hover:bg-accent",
  outline: "border border-line-strong text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink-soft hover:text-accent",
};

export default function Button({
  children,
  onClick,
  href,
  download,
  variant = "primary",
  className,
  target,
  rel,
  type = "button",
}) {
  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.98 }}
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        className={cls}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.98 }} type={type} onClick={onClick} className={cls}>
      {children}
    </motion.button>
  );
}
