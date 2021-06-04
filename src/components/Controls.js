import React from "react";

const Controls = ({ prev, shuffle, next }) => {
  return (
    <>
      <button onClick={prev}>Previous</button>
      <button onClick={shuffle}>Shuffle</button>
      <button onClick={next}>Next</button>
    </>
  );
};

export default Controls;
