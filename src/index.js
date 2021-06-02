import React from "react";
import ReactDom from "react-dom";

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
    index: 0
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

  render() {
    const { data, index } = this.state;

    return (
      <>
        <Item title={data[index].song} subtitle={data[index].artist} />
        <br />
        <button onClick={this.shuffle}>Shuffle</button>
        <button onClick={this.next}>Next</button>
      </>
    );
  }
}

ReactDom.render(<App />, root);
