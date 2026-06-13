export function Ticker({ items, fast = false }: { items: string[]; fast?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-beige bg-primary py-3">
      <div className={`flex whitespace-nowrap ${fast ? "marquee-fast" : "marquee"}`}>
        {doubled.map((t, i) => (
          <span key={i} className="mx-6 font-display text-lg uppercase tracking-widest text-beige">
            {t} <span className="mx-3 text-ink">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
