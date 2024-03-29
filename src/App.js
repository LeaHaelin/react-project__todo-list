import React, { useState, useContext } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { Status } from "./components/Status";
import { ThemeContext } from "./context/Theme";
import "./styles/app.css";

function App() {
  //useStates
  const [inputText, setInputText] = useState(""); // to get the user's input text.
  const [todos, setTodos] = useState([]); // to store a newly updated todo in the list.
  const [filteredTodos, setFilteredTodos] = useState([]); //to show the list on UI depends on the status of a todo.
  const [todoStatus, setTodoStatus] = useState("all"); // to update the status of a todo when a status btn clicks.
  const { isDarkMode, setIsDarkMode, themes } = useContext(ThemeContext); //Theme 
  //statusHandler will update status in mobile => <Status>, desktop => <List>.
  const statusHandler = (clickStatus) => {
    setTodoStatus(clickStatus);
  }

  return (
    <div className={isDarkMode ? "App App--dark" : "App App--light"} style={themes}>
      <div className="content">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Input inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} isDarkMode={isDarkMode} themes={themes} />
        <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} statusHandler={statusHandler} themes={themes} isDarkMode={isDarkMode} />
        <Status todos={todos} setFilteredTodos={setFilteredTodos} todoStatus={todoStatus} setTodoStatus={setTodoStatus} statusHandler={statusHandler} themes={themes} />
        <footer className="footer" style={{ color: themes.listTextColor }}>
          <p className="footer__credit" >TODO App built by <a className="footer__name" href="https://github.com/LeaHaelin">Lea H. Kim</a>.</p>
        </footer>
      </div>
    </div >
  );
}

export default App;
