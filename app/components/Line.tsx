import React from "react";

interface LineProps {
  color?: string;
  h?: string;
  w?: string;
}

export const Line: React.FC<LineProps> = ({
  color = "#000000",
  h = 2,
  w = "100%",
}) => {
  return (
    <div
      style={{
        borderColor: color,
        borderBottomWidth: typeof h === "number" ? `${h}px` : h,
        width: typeof w === "number" ? `${w}px` : w,
      }}
      className="border-solid"
    />
  );
};
