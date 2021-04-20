import React, { useState, useContext } from "react";
import Notes from "./Notes";
import GlobalContext from "../context/GlobalContext";
import uuid from "react-uuid";

function Form() {
  const { notes, submitNotes } = useContext(GlobalContext);
  const [input, setInput] = useState({
    title: "",
    paragraph: "",
  });

  //

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: uuid(),
      title: input.title,
      paragraph: input.paragraph,
    };

    submitNotes(newNote);
    console.log(newNote);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-field">
        <input
          name="title"
          value={input.title}
          onChange={handleInputChange}
          className="title"
          placeholder="Title"
          type="text"
        />
        <textarea
          name="paragraph"
          onChange={handleInputChange}
          className="paragraph"
          placeholder="Note..."
          type="text"
        />
        <button className="addnote-btn">Add Note</button>
      </form>
      <div className="all-notes">
        {notes.map((note) => {
          return <Notes note={note} />;
        })}
      </div>
    </div>
  );
}

export default Form;
