import React from "react";

// Component
const Item = ({ title, subtitle, ...props }) => {
  return (
    <span {...props}>
      {title} - {subtitle}
    </span>
  );
};

export default Item;
