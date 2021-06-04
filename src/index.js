import React from "react";
import ReactDom from "react-dom";
import Player from "./components/Player";
import Controls from "./components/Controls";
import List from "./components/List";

import "./styles.css";

const root = document.getElementById("app");

//Container Component
class App extends React.Component {
  constructor(args) {
    super(args);
    this.song = React.createRef();
    this.artist = React.createRef();
  }
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
    showForm: false,
    error: ""
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
    this.setState(({ showForm }) => ({
      showForm: !showForm,
      error: ""
    }));
  };

  add = (event) => {
    event.preventDefault();
    //const { song, artist } = event.target.elements;
    const { data } = this.state;
    const song = this.song.current.value;
    const artist = this.artist.current.value;

    if (!song || !artist) {
      this.setState({
        error: "Song and Artist are required"
      });
      return;
    }

    this.setState(
      {
        data: [
          ...data,
          {
            song,
            artist
          }
        ]
      },
      () => {
        this.toggleForm();
      }
    );
  };

  render() {
    const { data, index, showForm, error } = this.state;

    return (
      <>
        <Player data={data} index={index} />
        <Controls prev={this.prev} shuffle={this.shuffle} next={this.next} />
        <List data={data} selected={index} onSelect={this.play} />

        {showForm ? (
          <form onSubmit={this.add}>
            <input type="text" name="song" ref={this.song} />
            <input type="text" name="artist" ref={this.artist} />
            <button type="submit">Save</button>
            <button onClick={this.toggleForm}>Cancel</button>
          </form>
        ) : (
          <>
            <button onClick={this.toggleForm}>Add</button>
            <button onClick={this.remove}>Remove</button>
          </>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </>
    );
  }
}

ReactDom.render(<App />, root);
