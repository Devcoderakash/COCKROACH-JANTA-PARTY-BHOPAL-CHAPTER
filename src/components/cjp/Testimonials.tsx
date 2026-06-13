import { motion } from "motion/react";
import { Quote } from "lucide-react";

const items = [
  { q: "CJP gave me hope. Job still pending.", n: "Rahul, B.Tech 4th yr" },
  { q: "Now I complain professionally.", n: "Anu, ex-intern" },
  { q: "Finally a political party for assignment victims.", n: "Kabir, MBA aspirant" },
  { q: "My hostel trauma is now politically recognized.", n: "Priya, MANIT survivor" },
];

export function Testimonials() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// Field Reports</p>
          <h2 className="mt-2 font-display text-5xl uppercase text-beige md:text-7xl">
            Voices From The <span className="text-primary">Trenches</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative border-2 border-border bg-card p-8"
            >
              <Quote className="absolute right-4 top-4 text-primary/40" size={48} />
              <blockquote className="font-display text-2xl uppercase leading-tight text-beige md:text-3xl">
                "{it.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 bg-primary font-display text-xl uppercase leading-10 text-center text-beige">
                  {it.n[0]}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">— {it.n}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
