import React from "react";

// Component
export const Item = ({ title, subtitle, ...props }) => {
  return (
    <span {...props}>
      {title} - {subtitle}
    </span>
  );
};
