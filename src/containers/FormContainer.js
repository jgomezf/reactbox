import React, { useState } from "react";
import "../styles.css";

export const Form = ({ add, remove }) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
    setError("");
    // this.setState(({ showForm }) => ({
    //   showForm: !showForm,
    //   error: ""
    // }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    const { song, artist } = event.target.elements;

    if (!song.value || !artist.value) {
      setError("Song and Artist are required");
      // this.setState({
      //   error: "Song and Artist are required"
      // });
      // return;
    }

    add({
      song: song.value,
      artist: song.value
    });

    toggleForm();
  };

  return (
    <>
      {showForm ? (
        <form onSubmit={handleSave} className="control">
          <input type="text" name="song" />
          <input type="text" name="artist" />
          <button type="submit">Save</button>
          <button onClick={toggleForm}>Cancel</button>
        </form>
      ) : (
        <div className="control">
          <button onClick={toggleForm}>Add</button>
          <button onClick={remove}>Remove</button>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

//PureComponent hace que no se vuelva a renderizar,
//y si y solo si cambia alguno de los props
// class FormContainer extends React.PureComponent {
//   state = {
//     showForm: false,
//     error: ""
//   };

//   toggleForm = () => {
//     this.setState(({ showForm }) => ({
//       showForm: !showForm,
//       error: ""
//     }));
//   };

//   handleSave = (event) => {
//     event.preventDefault();
//     const { song, artist } = event.target.elements;

//     if (!song || !artist) {
//       this.setState({
//         error: "Song and Artist are required"
//       });
//       return;
//     }

//     this.props.add({
//       song,
//       artist
//     });

//     this.toggleForm();
//   };

//   render() {
//     const { showForm, error } = this.state;
//     return (
//       <>
//         {showForm ? (
//           <form onSubmit={this.handleSave} className="control">
//             <input type="text" name="song" />
//             <input type="text" name="artist" />
//             <button type="submit">Save</button>
//             <button onClick={this.toggleForm}>Cancel</button>
//           </form>
//         ) : (
//           <div className="control">
//             <button onClick={this.toggleForm}>Add</button>
//             <button onClick={this.props.remove}>Remove</button>
//           </div>
//         )}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </>
//     );
//   }
// }

// export default FormContainer;
