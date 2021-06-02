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
    index: 0
  };

  render() {
    const { data, index } = this.state;

    return (
      <>
        <Item title={data[index].song} subtitle={data[index].artist} />
        <br />
        <button
          onClick={() => {
            this.setState({
              index: Math.floor(Math.random() * data.length)
            });
          }}
        >
          Shuffle
        </button>
      </>
    );
  }
}

ReactDom.render(<App />, root);
