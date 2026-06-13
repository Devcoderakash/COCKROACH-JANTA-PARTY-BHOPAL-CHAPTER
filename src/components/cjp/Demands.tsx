import { motion } from "motion/react";
import { Wifi, Brain, HeartHandshake, Coffee, BedDouble, Wallet, Construction } from "lucide-react";

const demands = [
  { icon: Wifi, t: "Free WiFi", d: "In every hostel. Even the haunted ones." },
  { icon: Brain, t: "Mental Recovery Leave", d: "After every viva. Minimum 72 hours." },
  { icon: HeartHandshake, t: "Emotional Damage Compensation", d: "Tax-deductible. Apply within 24hrs of breakup." },
  { icon: Coffee, t: "Free Chai During Placements", d: "With biscuit. Parle-G is the bare minimum." },
  { icon: BedDouble, t: "Government-Approved Nap Breaks", d: "2pm – 4pm. Constitutionally protected." },
  { icon: Wallet, t: "Intern Salary > ₹15,000", d: "Anything less is officially a hobby." },
  { icon: Construction, t: "Pothole Tourism Department", d: "Guided tours. Souvenirs. EMI options." },
];

export function Demands() {
  return (
    <section className="relative border-y-2 border-primary bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// 7-Point Charter</p>
          <h2 className="mt-2 font-display text-5xl uppercase text-beige md:text-7xl">
            Our <span className="text-primary">Demands</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demands.map((d, i) => (
            <motion.div
              key={d.t}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, rotate: -1 }}
              className="group relative cursor-default border-2 border-border bg-card p-6 transition-shadow hover:border-primary hover:shadow-[0_0_30px_oklch(0.58_0.24_27_/_0.4)]"
            >
              <div className="absolute right-3 top-3 font-mono text-xs text-muted-foreground">№ {String(i + 1).padStart(2, "0")}</div>
              <d.icon className="text-primary transition-transform group-hover:scale-125 group-hover:rotate-12" size={36} />
              <h3 className="mt-4 font-display text-2xl uppercase text-beige">{d.t}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{d.d}</p>
              <div className="mt-4 inline-block bg-primary/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                non-negotiable
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
