import React from "react";
import ReactDom from "react-dom";

const root = document.getElementById("app");

const Item = ({ title, subtitle, ...props }) => {
  return (
    <span {...props}>
      {title} - {subtitle}
    </span>
  );
};
const element = (
  <>
    <Item title="Smels Like Teen Spirit" subtitle={<strong>Nirvana</strong>} />
    <br />
    <Item
      title="Nookie"
      subtitle={<strong>Limp Biskit</strong>}
      style={{
        borderColor: "blue",
        borderWidth: 1,
        borderStyle: "solid"
      }}
    />
  </>
);

ReactDom.render(element, root);
