import React from "react";

type DownArrowProps = {
  size?: number; 
  color?: string; 
};

const DownArrow: React.FC<DownArrowProps> = ({ size = 24, color = "#FFFFFF" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 -960 960 960"
      fill={color}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
};

export default DownArrow;
