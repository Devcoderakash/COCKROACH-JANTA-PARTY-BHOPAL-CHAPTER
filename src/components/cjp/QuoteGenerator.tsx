import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shuffle } from "lucide-react";

const quotes = [
  "If you can't fix the roads, at least fix your attitude. — Pothole, probably",
  "Inflation is just the universe charging us rent for breathing.",
  "Discipline is what happens after the deadline passes.",
  "We don't fall behind — the syllabus is just chasing us.",
  "Bhopal mausam: 4 seasons in 1 chai break.",
  "Sleep is just an unpaid internship for tomorrow.",
  "Every 'final year' is just the trailer of unemployment.",
  "Tax me later. I'm currently grieving.",
];

export function QuoteGenerator() {
  const [i, setI] = useState(0);
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// Wisdom.exe</p>
        <div className="mt-6 min-h-32 border-2 border-dashed border-primary/50 p-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="font-display text-2xl uppercase leading-snug text-beige md:text-4xl"
            >
              "{quotes[i]}"
            </motion.p>
          </AnimatePresence>
        </div>
        <button
          onClick={() => setI((p) => (p + 1 + Math.floor(Math.random() * (quotes.length - 1))) % quotes.length)}
          className="mt-6 inline-flex items-center gap-3 border-2 border-beige bg-transparent px-6 py-3 font-display uppercase tracking-widest text-beige hover:bg-beige hover:text-ink"
        >
          <Shuffle size={18} /> Generate Wisdom
        </button>
      </div>
    </section>
  );
}
