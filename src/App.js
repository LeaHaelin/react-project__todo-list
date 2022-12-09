import React, { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { Status } from "./components/Status";
import "./styles/app.css";

function App() {
  //useStates
  const [isLight, setIsLight] = useState(); // light mode -> all components
  const [inputText, setInputText] = useState(""); // to get user types. -> input component
  const [todos, setTodos] = useState([]); // to store a new updated list. -> input comp.


  return (
    <div className="App">
      <main className="main-div">
        <Header isLight={isLight} />
        <Input isLight={isLight} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
        <List isLight={isLight} todos={todos} setTodos={setTodos} />
        <Status isLight={isLight} />
      </main>
    </div>
  );
}

export default App;
