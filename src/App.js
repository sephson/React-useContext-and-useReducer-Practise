import "./App.css";
import React from "react";
import Form from "./components/Form";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <Form />
      </GlobalState>
    </div>
  );
}

export default App;
