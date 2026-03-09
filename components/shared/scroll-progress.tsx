"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const value = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      setProgress(value);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[70] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
