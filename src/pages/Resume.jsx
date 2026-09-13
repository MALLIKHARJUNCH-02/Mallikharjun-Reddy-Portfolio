import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Download, ArrowLeft } from "lucide-react";
import resumeData from "../data/resumeData";
import Button from "../components/ui/Button";

const RESUME_PDF = "/Mallikharjun_Resume.pdf";

function Section({ title, children }) {
  return (
    <section className="mt-5 first:mt-0">
      <h2 className="font-serif text-[13px] font-bold uppercase tracking-wider text-ink">{title}</h2>
      <div className="h-px bg-ink mt-1 mb-2.5" />
      {children}
    </section>
  );
}

function Header({ name, contact }) {
  return (
    <header className="text-center mb-5">
      <h1 className="font-serif text-2xl sm:text-[26px] font-bold tracking-wide text-ink">{name}</h1>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[13px] text-ink-soft">
        <span>{contact.phone}</span>
        <span className="text-ink-faint">•</span>
        <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
          {contact.email}
        </a>
        {contact.links.map((link) => (
          <span key={link.label} className="flex items-center gap-1.5">
            <span className="text-ink-faint">•</span>
            <a
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              {link.label}
            </a>
          </span>
        ))}
        <span className="text-ink-faint">•</span>
        <span>{contact.location}</span>
      </div>
    </header>
  );
}

function TechnicalSkills({ groups }) {
  return (
    <ul className="space-y-1 text-[13.5px] leading-relaxed text-ink-soft">
      {groups.map((group) => (
        <li key={group.category}>
          <span className="font-semibold text-ink">{group.category}:</span> {group.items.join(", ")}
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc pl-[18px] space-y-1 text-[13.5px] leading-relaxed text-ink-soft">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function EntryLinks({ links }) {
  return (
    <span className="text-xs whitespace-nowrap">
      {links.map((link, i) => (
        <span key={link.label}>
          {i > 0 && <span className="text-ink-faint"> | </span>}
          <a href={link.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            {link.label}
          </a>
        </span>
      ))}
    </span>
  );
}

function Projects({ items }) {
  return (
    <div className="flex flex-col gap-3.5">
      {items.map((project) => (
        <div key={project.title}>
          <div className="flex items-baseline justify-between flex-wrap gap-x-3 gap-y-1">
            <h3 className="text-sm font-semibold text-ink">{project.title}</h3>
            <EntryLinks links={project.links} />
          </div>
          <div className="mt-1.5">
            <BulletList items={project.bullets} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Internships({ items }) {
  return (
    <div className="flex flex-col gap-3.5">
      {items.map((job) => (
        <div key={job.role + job.company}>
          <div className="flex items-baseline justify-between flex-wrap gap-x-3 gap-y-1">
            <h3 className="text-sm font-semibold text-ink">
              {job.role} – {job.company}
            </h3>
            {job.date && <span className="text-xs text-ink-faint whitespace-nowrap">{job.date}</span>}
          </div>
          <div className="mt-1.5">
            <BulletList items={job.bullets} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Education({ items }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((edu) => (
        <div key={edu.institution}>
          <div className="flex items-baseline justify-between flex-wrap gap-x-3 gap-y-1">
            <h3 className="text-sm font-semibold text-ink">{edu.institution}</h3>
            <span className="text-xs text-ink-faint whitespace-nowrap">{edu.date}</span>
          </div>
          <div className="mt-0.5 flex flex-wrap gap-x-1.5 text-[13px] text-ink-soft">
            <span>{edu.degree}</span>
            <span className="text-ink-faint">•</span>
            <span>{edu.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Resume() {
  const {
    name,
    contact,
    summary,
    technicalSkills,
    coreStrengths,
    projects,
    internships,
    education,
    certifications,
  } = resumeData;

  return (
    <div className="min-h-screen bg-paper-dim">
      {/* Top bar: not part of the document itself, hidden when printing */}
      <div className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-line print:hidden">
        <div className="container-page h-16 flex items-center justify-between">
          <RouterLink
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to portfolio
          </RouterLink>
          <Button href={RESUME_PDF} download variant="primary" className="text-sm py-2">
            <Download size={15} aria-hidden="true" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Document */}
      <div className="py-10 sm:py-14 px-4 print:py-0 print:px-0">
        <div className="max-w-[850px] mx-auto bg-white rounded-lg shadow-card-hover p-8 sm:p-12 print:shadow-none print:rounded-none print:p-8 print:max-w-none">
          <Header name={name} contact={contact} />

          <Section title="Professional Summary">
            <p className="text-[13.5px] leading-relaxed text-ink-soft">{summary}</p>
          </Section>

          <Section title="Technical Skills">
            <TechnicalSkills groups={technicalSkills} />
          </Section>

          <Section title="Core Strengths">
            <BulletList items={coreStrengths} />
          </Section>

          <Section title="Projects">
            <Projects items={projects} />
          </Section>

          <Section title="Internships">
            <Internships items={internships} />
          </Section>

          <Section title="Education">
            <Education items={education} />
          </Section>

          <Section title="Certifications">
            <BulletList items={certifications} />
          </Section>
        </div>
      </div>
    </div>
  );
}
