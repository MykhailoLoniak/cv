import React from "react";

interface ConsoleProps {
  folder: string;
}

export const Console: React.FC<ConsoleProps> = ({ folder }) => {
  return (
    <span className="text-green-300 mt-10 inline-block">
      mykhailo@server: <span className="text-blue-400">{folder}</span>{" "}
      <span className="text-blue-100 animate-pulse">&#9616;</span>
    </span>
  );
};
