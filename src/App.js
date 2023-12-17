import React from "react";
import "./App.css";
import Kanban from "./components/Kanban";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Kanban />
    </React.Fragment>
  );
}

export default App;
