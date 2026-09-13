export default function ArrowLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors hover:underline"
    >
      {children}
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">›</span>
    </a>
  );
}
