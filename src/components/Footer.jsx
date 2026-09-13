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
      <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-soft">
        <p>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
