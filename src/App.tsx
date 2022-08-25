import React, { useState } from "react";
import "./App.css";
import { TodoList, AddTask } from "./components/Todo";

const App = () => {
  const [task, setTask] = useState("");

  return (
    <div className="App">
      <h1>Reduxタスク管理アプリ</h1>
      <div>
        <TodoList />
      </div>
      <div>
        <AddTask />
      </div>
    </div>
  );
};

export default App;
