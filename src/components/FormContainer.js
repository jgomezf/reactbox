import React from "react";
import Form from "./Form";

//PureComponent hace que no se vuelva a renderizar,
//y si y solo si cambia alguno de los props
class FormContainer extends React.PureComponent {
  state = {
    showForm: false,
    error: ""
  };

  toggleForm = () => {
    this.setState(({ showForm }) => ({
      showForm: !showForm,
      error: ""
    }));
  };

  handleSave = (event) => {
    event.preventDefault();
    const { song, artist } = event.target.elements;

    if (!song || !artist) {
      this.setState({
        error: "Song and Artist are required"
      });
      return;
    }

    this.props.add({
      song,
      artist
    });

    this.toggleForm();
  };

  render() {
    const { showForm, error } = this.state;
    return (
      <>
        {showForm ? (
          <Form toggleForm={this.toggleForm} handleSave={this.handleSave} />
        ) : (
          <>
            <button onClick={this.toggleForm}>Add</button>
            <button onClick={this.props.remove}>Remove</button>
          </>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </>
    );
  }
}

export default FormContainer;
