import React from "react";
import siteData from "../data/site";

const links = [
  { label: "GitHub", href: siteData.contact.github },
  { label: "LinkedIn", href: siteData.contact.linkedin },
  { label: "Behance", href: "https://www.behance.net/mallikhreddy1" },
  { label: "Email", href: `mailto:${siteData.contact.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-ink-soft">
        <p className="flex justify-center items-center gap-2">
          
          <a
          href="/"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-line-strong overflow-hidden hover:border-accent transition-colors"
          aria-label="Home"
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </a>


          
           © {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="hover:text-accent transition-colors hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
