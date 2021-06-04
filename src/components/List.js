import React from "react";
import Item from "./Item";

const List = ({ data = [], selected = -1, onSelect }) => {
  return (
    <>
      <ul>
        {data.map((element, i) => (
          <li
            key={i}
            onClick={(event) => {
              onSelect({ event, nextIndex: i });
            }}
            className={selected === i ? "selected" : ""}
          >
            <Item title={element.song} subtitle={element.artist} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
