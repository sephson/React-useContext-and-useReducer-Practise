const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTES":
      return { ...state, notes: [action.payload, ...state.notes] };

    case "DELETE_NOTES":
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note.id !== action.payload;
        }),
      };
    default:
  }
};

export default AppReducer;
