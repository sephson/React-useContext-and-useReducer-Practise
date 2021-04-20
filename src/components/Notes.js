import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Notes({ note }) {
  const { deleteNotes } = useContext(GlobalContext);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteNotes(note.id);
  };

  return (
    <>
      <div className="notes">
        <h3 className="notes-header">{note.title}</h3>
        <p className="notes-paragraph">{note.paragraph}</p>
        <button className="del-btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </>
  );
}

export default Notes;
