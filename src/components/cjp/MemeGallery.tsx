import { motion } from "motion/react";

type Poster = { title: string; sub: string; tag: string; bg: string; rot: number; h: number };

const posters: Poster[] = [
  { title: "FRESHER", sub: "with 5 yrs experience required", tag: "JOB LISTING", bg: "primary", rot: -3, h: 300 },
  { title: "₹8K", sub: "intern salary in 2025", tag: "BREAKING", bg: "beige", rot: 2, h: 220 },
  { title: "MP NAGAR", sub: "where dreams come to chai", tag: "BHOPAL", bg: "card", rot: -1, h: 360 },
  { title: "PLACEMENT", sub: "season has entered the chat", tag: "WARNING", bg: "primary", rot: 3, h: 260 },
  { title: "POTHOLE", sub: "or swimming pool? you decide", tag: "MONSOON", bg: "beige", rot: -2, h: 320 },
  { title: "VIVA", sub: "the silent killer", tag: "ENGINEERING", bg: "card", rot: 1, h: 240 },
  { title: "RENT", sub: "₹12,000 for a shoe box", tag: "REAL ESTATE", bg: "primary", rot: -4, h: 280 },
  { title: "MOM", sub: '"sharma ji ka beta selected ho gaya"', tag: "TRAUMA", bg: "beige", rot: 2, h: 340 },
];

function bgClass(b: string) {
  if (b === "primary") return "bg-primary text-beige";
  if (b === "beige") return "bg-beige text-ink";
  return "bg-card text-beige border-2 border-primary";
}

export function MemeGallery() {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// People's Archive</p>
          <h2 className="mt-2 font-display text-5xl uppercase text-beige md:text-7xl">
            Meme <span className="text-primary">Wall</span>
          </h2>
          <p className="mt-3 font-mono text-sm text-muted-foreground">posters from the people, for the people, on the people</p>
        </div>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {posters.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              style={{ height: p.h, transform: `rotate(${p.rot}deg)` }}
              className={`group relative mb-4 flex break-inside-avoid flex-col justify-between overflow-hidden p-5 shadow-[6px_6px_0_var(--color-ink)] transition ${bgClass(p.bg)}`}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">▌ {p.tag}</div>
              <div>
                <div className="font-display text-4xl uppercase leading-none md:text-5xl">{p.title}</div>
                <div className="mt-2 font-body text-sm opacity-90">{p.sub}</div>
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase opacity-60">
                <span>cjp/bpl</span><span>● viral</span>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-ink/0 transition group-hover:bg-ink/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
