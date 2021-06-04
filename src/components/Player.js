import React from "react";
import Item from "./Item";

const Player = ({ data = [], index = -1 }) => {
  return (
    <div>
      {index === -1 ? (
        <Item title="Untitled" subtitle="Unknown" />
      ) : (
        <Item title={data[index].song} subtitle={data[index].artist} />
      )}
    </div>
  );
};

export default Player;