import React from "react";

function Button({
  color,
  bgColor,
  width,
  height,
  content,
  className,
}: {
  color: string;
  width: string;
  height: string;
  content: string;
  bgColor: string;
  className: string;
}) {
  return (
    <button className={`${color} ${width} ${height}${bgColor} ${className}`}>
      {content}
    </button>
  );
}

export default Button;
