import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-3xl font-bold mb-10 text-gray-900">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
