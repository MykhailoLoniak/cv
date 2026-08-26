"use client";

import React, { useEffect, useState } from "react";

export const LineNumbers = () => {
  const [count, setCount] = useState(300);

  useEffect(() => {
    setCount(Math.ceil(document.documentElement.scrollHeight / 16));
  }, []);

  return (
    <aside
      aria-hidden="true"
      className="hidden md:flex flex-col font-mono text-xs text-neutral-600 select-none border-e-2 absolute h-full overflow-hidden pe-1"
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>{String(i + 1).padStart(3, "0")}</span>
      ))}
    </aside>
  );
};
