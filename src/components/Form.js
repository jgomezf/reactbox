import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor Form");
  }

  componentDidMount() {
    console.log("componentDidMount Form");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate Form");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Form");
    // NO Ajax
    // No setState
  }

  render() {
    console.log("render Form");
    return (
      <form onSubmit={this.props.handleSave}>
        <input type="text" name="song" />
        <input type="text" name="artist" />
        <button type="submit">Save</button>
        <button onClick={this.props.toggleForm}>Cancel</button>
      </form>
    );
  }
}

export default Form;
