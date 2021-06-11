import React from "react";

export const Controls = ({ prev, shuffle, next }) => {
  console.log("render Controls");

  return (
    <div className="control">
      <button onClick={prev}>
        <i className="fas fa-backward"></i>
      </button>
      <button onClick={shuffle}>Shuffle</button>
      <button>
        <i className="fas fa-play"></i>
      </button>
      <button onClick={next}>
        <i className="fa fa-forward"></i>
      </button>
    </div>
  );
};

//optimizacion con React.memo
// export default React.memo(Controls, (prevProps, nextProps) => {
//   return true;
// });
