export function Cockroach({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
      {/* legs */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M30 35 L10 25" /><path d="M30 50 L8 50" /><path d="M30 65 L10 75" />
        <path d="M70 35 L90 25" /><path d="M70 50 L92 50" /><path d="M70 65 L90 75" />
      </g>
      {/* antennae */}
      <path d="M42 18 Q35 5 25 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M58 18 Q65 5 75 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* body */}
      <ellipse cx="50" cy="52" rx="22" ry="32" fill="currentColor" />
      <ellipse cx="50" cy="28" rx="14" ry="12" fill="currentColor" />
      {/* shell line */}
      <path d="M50 22 L50 82" stroke="oklch(0.08 0.01 30)" strokeWidth="1.5" />
      <path d="M38 40 Q50 42 62 40" stroke="oklch(0.08 0.01 30)" strokeWidth="1" fill="none" />
      {/* eyes */}
      <circle cx="44" cy="26" r="2" fill="oklch(0.88 0.06 80)" />
      <circle cx="56" cy="26" r="2" fill="oklch(0.88 0.06 80)" />
    </svg>
  );
}
