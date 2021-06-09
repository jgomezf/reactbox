import React from "react";

const Panel = ({ children, title, wrapperClass }) => {
  return (
    <div className={`main-ui ${wrapperClass}`}>
      <header>
        <div className="line" />
        <h1>{title}</h1>
      </header>
      <div className="inner">{children}</div>
    </div>
  );
};

export default Panel;
