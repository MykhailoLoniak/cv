import React from "react";

interface Props {
  count?: number;
}

export const LineNumbers: React.FC<Props> = ({ count = 300 }) => (
  <aside
    aria-hidden="true"
    className="hidden md:flex flex-col font-mono text-xs text-neutral-600 select-none border-e-2 absolute h-full overflow-hidden pe-1"
  >
    {Array.from({ length: count }, (_, i) => (
      <span key={i}>{String(i + 1).padStart(3, "0")}</span>
    ))}
  </aside>
);
