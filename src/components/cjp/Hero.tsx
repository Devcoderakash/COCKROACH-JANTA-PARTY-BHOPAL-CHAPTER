import { motion } from "motion/react";
import { ArrowRight, ScrollText } from "lucide-react";
import { Cockroach } from "./Cockroach";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden spotlight">
      {/* smoke blobs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="smoke absolute h-40 w-40 rounded-full bg-primary/20 blur-3xl"
          style={{ left: `${10 + i * 15}%`, bottom: 0, animationDelay: `${i * 1.3}s` }}
        />
      ))}

      {/* floating cockroaches */}
      <div className="crawl absolute left-[8%] top-[20%] text-primary opacity-60"><Cockroach size={42} /></div>
      <div className="crawl absolute right-[10%] top-[35%] text-beige opacity-50" style={{ animationDelay: "2s" }}><Cockroach size={56} /></div>
      <div className="crawl absolute left-[20%] bottom-[15%] text-primary opacity-40" style={{ animationDelay: "4s" }}><Cockroach size={36} /></div>

      {/* protest stickers */}
      <motion.div
        initial={{ rotate: -12, scale: 0 }} animate={{ rotate: -12, scale: 1 }} transition={{ delay: 0.6, type: "spring" }}
        className="sticker absolute right-6 top-24 hidden px-3 py-1 text-sm md:block"
      >EST. 2025</motion.div>
      <motion.div
        initial={{ rotate: 8, scale: 0 }} animate={{ rotate: 8, scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
        className="tape absolute left-6 top-32 hidden text-xs md:block"
      >FILE NO. CJP/BPL/420</motion.div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-12 bg-primary" /> A satirical movement <span className="h-px w-12 bg-primary" />
        </div>

        <h1
          className="glitch font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85] uppercase"
          data-text="Cockroach Janta Party"
        >
          Cockroach Janta Party
        </h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-2 inline-block bg-beige px-6 py-1 font-display text-2xl uppercase tracking-[0.4em] text-ink md:text-4xl"
        >
          ▌ Bhopal Chapter ▐
        </motion.div>

        <p className="mt-8 max-w-2xl font-mono text-base text-muted-foreground md:text-lg">
          Still surviving. Still unemployed. Still paying taxes.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#join"
            className="group flex items-center gap-3 bg-primary px-8 py-4 font-display text-lg uppercase tracking-widest text-beige shadow-[6px_6px_0_var(--color-ink)] transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_var(--color-ink)]"
          >
            Join The Movement
            <ArrowRight className="transition group-hover:translate-x-1" size={20} />
          </a>
          <a
            href="#manifesto"
            className="flex items-center gap-3 border-2 border-beige bg-transparent px-8 py-4 font-display text-lg uppercase tracking-widest text-beige hover:bg-beige hover:text-ink"
          >
            <ScrollText size={20} /> Read Manifesto
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          LIVE: <span className="text-beige">12,847 cockroaches online</span>
          <span className="opacity-30">|</span>
          <span>FROM A 4×4 HOSTEL ROOM IN BHOPAL</span>
        </div>
      </div>
    </section>
  );
}
