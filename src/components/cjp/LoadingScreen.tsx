import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cockroach } from "./Cockroach";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) { clearInterval(id); setTimeout(() => setDone(true), 350); return 100; }
        return next;
      });
    }, 140);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-ink"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-primary"
          >
            <Cockroach size={80} />
          </motion.div>
          <p className="mt-6 font-display text-2xl uppercase tracking-widest text-beige">
            Initializing Revolution…
          </p>
          <div className="mt-4 h-1 w-64 overflow-hidden bg-muted">
            <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {Math.floor(pct)}% — Mobilizing tired citizens
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
