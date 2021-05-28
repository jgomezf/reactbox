import React from "react";
import ReactDom from "react-dom";

const root = document.getElementById("app");

const element = (
  <div className="container">
    <p>Hello World</p>
  </div>
);

ReactDom.render(element, root);
