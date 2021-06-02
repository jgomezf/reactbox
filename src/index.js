import React from "react";
import ReactDom from "react-dom";

import "./styles.css";

const root = document.getElementById("app");

// Component
const Item = ({ title, subtitle, ...props }) => {
  return (
    <span {...props}>
      {title} - {subtitle}
    </span>
  );
};

//Container Component
class App extends React.Component {
  state = {
    data: [
      {
        song: "Smells Like Teen Spirit",
        artist: "Nirvana"
      },
      {
        song: "Blind",
        artist: "KoRn"
      },
      {
        song: "Nookie",
        artist: "Limp Biskit"
      }
    ],
    index: -1
  };

  prev = () => {
    this.setState((nextState) => {
      return {
        index:
          nextState.index <= 0 ? nextState.data.length - 1 : nextState.index - 1
      };
    });
  };

  shuffle = () => {
    const { data } = this.state;

    this.setState({
      index: Math.floor(Math.random() * data.length)
    });
  };

  next = () => {
    this.setState((prevState) => {
      return {
        index: (prevState.index + 1) % prevState.data.length
      };
    });
  };

  play = ({ nextIndex }) => {
    this.setState({
      index: nextIndex
    });
  };

  render() {
    const { data, index } = this.state;

    return (
      <>
        {index === -1 ? (
          <Item title="Untitled" subtitle="Unknown" />
        ) : (
          <Item title={data[index].song} subtitle={data[index].artist} />
        )}
        <br />
        <button onClick={this.prev}>Previous</button>
        <button onClick={this.shuffle}>Shuffle</button>
        <button onClick={this.next}>Next</button>
        <br />
        <ul>
          {data.map((element, i) => (
            <li
              key={i}
              onClick={(event) => {
                this.play({ event, nextIndex: i });
              }}
              className={index === i ? "selected" : ""}
            >
              <Item title={element.song} subtitle={element.artist} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ReactDom.render(<App />, root);
