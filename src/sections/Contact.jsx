import React from "react";
import siteData from "../data/site";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

const iconLinks = [
  { icon: FaPhoneAlt, label: siteData.contact.primaryPhone, href: `tel:${siteData.contact.primaryPhone.replace(/\s+/g, "")}` },
  { icon: FaEnvelope, label: "Email", href: `mailto:${siteData.contact.email}` },
  { icon: FaLinkedin, label: "LinkedIn", href: siteData.contact.linkedin },
  { icon: FaGithub, label: "GitHub", href: siteData.contact.github },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-2xl">
        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={`mailto:${siteData.contact.email}`} variant="primary">
            Email me
          </Button>
          <Button href={`tel:${siteData.contact.primaryPhone.replace(/\s+/g, "")}`} variant="outline">
            {siteData.contact.primaryPhone}
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          {iconLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors hover:underline"
            >
              <Icon aria-hidden="true" />
              {label}
            </a>
          ))}
          <a
            href={`tel:${siteData.contact.secondaryPhone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors hover:underline"
          >
            <FaPhoneAlt aria-hidden="true" />
            {siteData.contact.secondaryPhone}
          </a>
        </div>
      </div>
    </Section>
  );
}
