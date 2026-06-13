import { useEffect, useState } from "react";

export function CustomCursor() {
  const [p, setP] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setP({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div className="cjp-cursor hidden md:block" style={{ left: p.x, top: p.y }}>
      <div className="h-full w-full rounded-full border-2 border-beige" />
    </div>
  );
}
