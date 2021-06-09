import React from "react";

const Controls = ({ prev, shuffle, next }) => {
  console.log("render Controls");

  return (
    <>
      <button onClick={prev}>Previous</button>
      <button onClick={shuffle}>Shuffle</button>
      <button onClick={next}>Next</button>
    </>
  );
};

export default React.memo(Controls, (prevProps, nextProps) => {
  return true;
});
