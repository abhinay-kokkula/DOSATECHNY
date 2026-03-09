"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const style = useMemo<CSSProperties>(
    () => ({
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    }),
    [offset],
  );

  const baseClass = cn(
    "inline-flex items-center justify-center transition-transform duration-200",
    variant === "primary" ? "btn-primary" : "btn-secondary",
    className,
  );

  const updateOffset = (event: React.MouseEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left - box.width / 2) * 0.15;
    const y = (event.clientY - box.top - box.height / 2) * 0.15;
    setOffset({ x, y });
  };

  const resetOffset = () => {
    setOffset({ x: 0, y: 0 });
  };

  if (href) {
    return (
      <Link
        href={href}
        className={baseClass}
        style={style}
        onMouseMove={updateOffset}
        onMouseLeave={resetOffset}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={baseClass}
      style={style}
      onMouseMove={updateOffset}
      onMouseLeave={resetOffset}
    >
      {children}
    </button>
  );
}
