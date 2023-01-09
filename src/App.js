import React, { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { Status } from "./components/Status";
import "./styles/app.css";

function App() {
  //useStates
  const [inputText, setInputText] = useState(""); // to get user types. -> Input
  const [todos, setTodos] = useState([]); // to store a new updated list. -> Input, Status
  const [filteredTodos, setFilteredTodos] = useState([]); //filter status of todos -> Status 
  const [todoStatus, setTodoStatus] = useState("all"); // update status of a todo when the status btn clicked -> Status 
  //statusHandler will update status in mobile = <Status>and desktop = <List>
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
