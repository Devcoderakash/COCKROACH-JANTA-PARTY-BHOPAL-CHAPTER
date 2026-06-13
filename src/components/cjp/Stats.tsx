import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 99, suffix: "%", label: "Emotional Damage" },
  { value: 420, suffix: "", label: "Fake Promises Detected" },
  { value: 7532, suffix: "", label: "Students Surviving Assignments" },
  { value: 0, suffix: "", label: "Roads Repaired After Rain" },
  { value: 100000, suffix: "+", label: "Citizens Mentally Tired" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500; const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString("en-IN")}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// Verified by no one</p>
          <h2 className="mt-2 font-display text-5xl uppercase text-beige md:text-7xl">
            The <span className="text-primary">Numbers</span> Don't Lie
          </h2>
          <p className="mt-3 font-mono text-sm text-muted-foreground">(but we might)</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden border-2 border-beige/20 bg-card/40 p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
              <div className="font-display text-4xl text-primary md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
