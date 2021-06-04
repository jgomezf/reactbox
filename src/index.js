import React from "react";
import ReactDom from "react-dom";
import Player from "./components/Player";
import Controls from "./components/Controls";
import List from "./components/List";

import "./styles.css";

const root = document.getElementById("app");

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
    index: -1,
    showForm: false
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

  remove = () => {
    const { index } = this.state;
    if (index !== -1) {
      this.setState(({ data }) => {
        const filteredData = data.filter((_, i) => {
          return i !== index;
        });
        return {
          data: filteredData,
          index: -1
        };
      });
    }
  };

  toggleForm = () => {
    this.setState(({ showForm }) => ({ showForm: !showForm }));
  };

  render() {
    const { data, index, showForm } = this.state;

    return (
      <>
        <Player data={data} index={index} />
        <Controls prev={this.prev} shuffle={this.shuffle} next={this.next} />
        <List data={data} selected={index} onSelect={this.play} />
        <button onClick={this.toggleForm}>Add</button>
        <button onClick={this.remove}>Remove</button>
        {showForm && (
          <form>
            <input type="text" name="song" id="song" />
            <input type="text" name="artist" id="artist" />
            <button onClick="">Save</button>
            <button onClick={this.toggleForm}>Cancel</button>
          </form>
        )}
      </>
    );
  }
}

ReactDom.render(<App />, root);
