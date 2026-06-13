import { useState } from "react";
import { Instagram, Phone, AlertTriangle } from "lucide-react";
import { Cockroach } from "./Cockroach";

export function Footer() {
  const [eggs, setEggs] = useState(0);
  const [show, setShow] = useState(false);
  const onClick = () => {
    const n = eggs + 1;
    setEggs(n);
    if (n >= 5) { setShow(true); setEggs(0); setTimeout(() => setShow(false), 4000); }
  };
  return (
    <footer className="relative border-t-2 border-primary bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <button onClick={onClick} className="group flex items-center gap-3 text-primary">
            <Cockroach size={48} className="transition group-hover:rotate-12" />
            <div className="text-left">
              <div className="font-display text-2xl uppercase text-beige">CJP</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Bhopal Chapter</div>
            </div>
          </button>
          <p className="mt-4 max-w-xs font-body text-sm text-muted-foreground">
            Built in Bhopal under emotional pressure, three EMIs, and one cup of cutting chai.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-primary">Helpline (fake)</h4>
          <a href="tel:+910000000420" className="mt-2 flex items-center gap-2 font-mono text-beige">
            <Phone size={16} /> +91 00000 00420
          </a>
          <p className="mt-1 font-mono text-xs text-muted-foreground">Mon–Fri, 2pm–2:05pm</p>

          <h4 className="mt-6 font-display text-sm uppercase tracking-widest text-primary">Follow The Chaos</h4>
          <a href="#" className="mt-2 inline-flex items-center gap-2 font-mono text-beige hover:text-primary">
            <Instagram size={16} /> @cjp.bhopal
          </a>
        </div>

        <div className="border-l-2 border-primary/30 pl-6">
          <h4 className="flex items-center gap-2 font-display text-sm uppercase tracking-widest text-primary">
            <AlertTriangle size={14} /> Disclaimer
          </h4>
          <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
            CJP Bhopal is a satirical art project. We are not a registered political party,
            NGO, cult, MLM scheme, or your relative on WhatsApp. Any resemblance to real
            politicians is purely the fault of reality. No cockroaches were harmed —
            several were elected to internal committees.
          </p>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} CJP Bhopal // No rights reserved. Steal the memes, not the dreams.
      </div>

      {show && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/90 p-6">
          <div className="border-4 border-primary bg-card p-10 text-center shadow-[12px_12px_0_var(--color-primary)]">
            <Cockroach size={100} className="mx-auto text-primary crawl" />
            <p className="mt-4 font-display text-3xl uppercase text-beige">🪳 Easter Egg Unlocked</p>
            <p className="mt-2 font-mono text-sm text-muted-foreground">You found the secret. Reward: existential clarity.</p>
          </div>
        </div>
      )}
    </footer>
  );
}
