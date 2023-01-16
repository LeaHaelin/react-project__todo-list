import React, { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { Status } from "./components/Status";
import "./styles/app.css";

function App() {
  //useStates
  const [inputText, setInputText] = useState(""); // to get the user's input text.
  const [todos, setTodos] = useState([]); // to store a newly updated todo in the list.
  const [filteredTodos, setFilteredTodos] = useState([]); //to show the list on UI depends on the status of a todo.
  const [todoStatus, setTodoStatus] = useState("all"); // to update the status of a todo when a status btn clicks.

  //statusHandler will update status in mobile => <Status>, desktop => <List>.
  const statusHandler = (clickStatus) => {
    setTodoStatus(clickStatus);
  }

  return (
    <div className="App">
      <main className="main-div">
        <div className="content">
          <Header />
          <Input inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
          <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} statusHandler={statusHandler} />
          <Status todos={todos} setFilteredTodos={setFilteredTodos} todoStatus={todoStatus} setTodoStatus={setTodoStatus} statusHandler={statusHandler} />
        </div>
      </main>
    </div>
  );
}

export default App;
