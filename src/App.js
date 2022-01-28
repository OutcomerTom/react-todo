import React from "react";
import "./App.css";
import "./styles/container.css";

import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

export default App;
