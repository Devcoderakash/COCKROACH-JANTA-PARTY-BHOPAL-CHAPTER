import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cockroach } from "./Cockroach";

const problems = [
  "Unemployment",
  "Rent in Bhopal somehow",
  "Backlogs (multiple)",
  "Crush doesn't reply",
  "Family expectations",
  "Roads disappeared",
  "Toxic boss",
  "All of the above",
];

export function MemberForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", insta: "", area: "", occ: "", problem: problems[0] });

  return (
    <section id="join" className="relative bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// Form CJP-01(B)</p>
          <h2 className="mt-2 font-display text-5xl uppercase text-beige md:text-7xl">
            Enlist <span className="text-primary">Now</span>
          </h2>
          <p className="mt-3 font-mono text-sm text-muted-foreground">No fees. No future. Only solidarity.</p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setOpen(true); }}
          className="space-y-5 border-2 border-beige bg-card/60 p-8 shadow-[8px_8px_0_var(--color-primary)]"
        >
          {[
            { k: "name", label: "Full Name", ph: "Aarav, Sneha, etc." },
            { k: "insta", label: "Instagram Handle", ph: "@unemployed_engineer" },
            { k: "area", label: "Area in Bhopal", ph: "MP Nagar / Arera / Habibganj" },
            { k: "occ", label: "Occupation (be honest)", ph: "Student / Intern / Vibes" },
          ].map((f) => (
            <div key={f.k}>
              <label className="font-mono text-xs uppercase tracking-widest text-primary">{f.label}</label>
              <input
                required
                placeholder={f.ph}
                value={(form as any)[f.k]}
                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                className="mt-1 w-full border-b-2 border-border bg-transparent px-1 py-2 font-body text-beige outline-none focus:border-primary"
              />
            </div>
          ))}

          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-primary">Biggest Problem</label>
            <select
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
              className="mt-1 w-full border-b-2 border-border bg-card px-1 py-2 font-body text-beige outline-none focus:border-primary"
            >
              {problems.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary py-4 font-display text-xl uppercase tracking-widest text-beige shadow-[6px_6px_0_var(--color-ink)] transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_var(--color-ink)]"
          >
            Become Official Cockroach
          </button>
        </form>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/90 p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.6, rotate: -8 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.6 }}
              transition={{ type: "spring" }}
              className="relative max-w-md border-4 border-primary bg-card p-8 text-center shadow-[12px_12px_0_var(--color-primary)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto mb-4 inline-block text-primary"><Cockroach size={72} /></div>
              <h3 className="font-display text-3xl uppercase text-beige">Congratulations</h3>
              <p className="mt-3 font-body text-muted-foreground">
                You are now part of the <span className="text-primary">survival ecosystem</span>.
                Membership ID: <span className="font-mono text-beige">CJP/BPL/{Math.floor(Math.random() * 90000) + 10000}</span>
              </p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                Benefits: nothing. Responsibilities: everything.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 bg-beige px-6 py-2 font-display uppercase tracking-widest text-ink hover:bg-primary hover:text-beige"
              >
                Accept Fate
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
