import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import AppReducer from "./AppReducer";

function GlobalState({ children }) {
  const initialState = {
    notes: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const submitNotes = (notes) => {
    dispatch({ type: "ADD_NOTES", payload: notes });
  };

  const deleteNotes = (id) => {
    dispatch({ type: "DELETE_NOTES", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{ notes: state.notes, submitNotes, deleteNotes }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
