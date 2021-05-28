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

function handleEvent(event) {
  console.log(event);
}

const element = (
  <>
    <Item title="Smels Like Teen Spirit" subtitle="Nirvana" />
    <br />
    <Item title="Nookie" subtitle="Limp Biskit" />
    <br />
    <button onClick={handleEvent}>Shuffle</button>
  </>
);

ReactDom.render(element, root);
