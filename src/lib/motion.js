// A single, restrained motion vocabulary reused across the site:
// sections fade/slide up once when they enter the viewport, and
// lists of items stagger in slightly. Nothing loops, nothing floats.

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = (delay = 0.06) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay },
  },
});

export const viewportOnce = { once: true, margin: "-80px" };
