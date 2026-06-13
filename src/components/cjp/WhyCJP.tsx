import { motion } from "motion/react";
import { Flame, Users, Coffee, GraduationCap, Briefcase, HeartCrack } from "lucide-react";

const voices = [
  { icon: GraduationCap, label: "Frustrated Students" },
  { icon: Briefcase, label: "Unpaid Interns" },
  { icon: Flame, label: "Engineering Aspirants" },
  { icon: Users, label: "Hostel Survivors" },
  { icon: HeartCrack, label: "Broken Startup Founders" },
  { icon: Coffee, label: "Chai Tapri Philosophers" },
];

const goals = [
  "Fighting unemployment with reels and rage",
  "Surviving inflation, one Maggi at a time",
  "Fixing roads that vanish after monsoon",
  "Ending the fake motivation industrial complex",
  "Reducing emotional damage during placements",
  "Demanding sleep as a constitutional right",
];

export function WhyCJP() {
  return (
    <section id="manifesto" className="relative border-t-2 border-primary bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// Manifesto.txt</p>
            <h2 className="mt-2 font-display text-5xl uppercase text-beige md:text-7xl">
              Why CJP <span className="text-primary">Exists</span>
            </h2>
          </div>
          <span className="stamp hidden text-primary md:inline-block">Classified</span>
        </div>

        <p className="max-w-3xl font-body text-lg text-muted-foreground md:text-xl">
          CJP Bhopal isn't a party. It's a coping mechanism with a logo. We are the
          unread group chat of the nation — the chai-stained, deadline-haunted,
          rent-trembling{" "}
          <span className="bg-primary px-2 text-beige">middle-class warriors</span>{" "}
          who refuse to die quietly. This is our group project. And nobody is doing
          their part.
        </p>

        <h3 className="mt-16 font-display text-2xl uppercase tracking-widest text-primary">
          / We Are The Voice Of
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {voices.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="hover-lift flex items-center gap-4 border-2 border-border bg-card px-5 py-4"
            >
              <v.icon className="text-primary" size={28} />
              <span className="font-display uppercase tracking-wide text-beige">{v.label}</span>
            </motion.div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl uppercase tracking-widest text-primary">
          / Movement Goals (officially unofficial)
        </h3>
        <ol className="mt-6 space-y-3">
          {goals.map((g, i) => (
            <motion.li
              key={g}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 border-l-4 border-primary bg-card px-5 py-3"
            >
              <span className="font-mono text-primary">{String(i + 1).padStart(2, "0")}.</span>
              <span className="font-body text-beige md:text-lg">{g}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
