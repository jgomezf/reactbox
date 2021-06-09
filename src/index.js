import React from "react";
import ReactDom from "react-dom";
import Player from "./components/Player";
import Controls from "./components/Controls";
import List from "./components/List";
import FormContainer from "./components/FormContainer";

import "./styles.css";

const root = document.getElementById("app");

//Container Component
class App extends React.Component {
  constructor(props) {
    const index = props.index >= 0 ? props.index : -1;
    super(props);
    //1. acceder a los props
    //2. declarar las variables
    //3. Inicializar o calcular el estado en base a props
    //NO utilizar setState
    //NO  ajax

    this.state = {
      data: [],
      index
    };
    console.log("constructor");
  }

  //lifeCycleHooks
  //si y solo si una sola vez
  componentDidMount() {
    //ajax
    console.log("componentDidMount App");
    setTimeout(() => {
      this.setState({
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
        ]
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate App");
    console.log(prevProps, prevState, snapshot);
    //ajax
  }

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

  add = ({ song, artist }) => {
    const { data } = this.state;

    this.setState({
      data: [
        ...data,
        {
          song: song.value,
          artist: artist.value
        }
      ]
    });
  };

  render() {
    console.log("render App");

    const { data, index } = this.state;

    return (
      <>
        <Player data={data} index={index} />
        <Controls prev={this.prev} shuffle={this.shuffle} next={this.next} />
        <List data={data} selected={index} onSelect={this.play} />
        <FormContainer add={this.add} remove={this.remove} />
      </>
    );
  }
}

ReactDom.render(<App index={-1} />, root);
