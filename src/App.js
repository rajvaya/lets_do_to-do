import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import userEvent from "@testing-library/user-event";

function App() {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [todos, setTodos] = useState([]);
  const [filteredtodos, setFilteredTodos] = useState([]);

  //this effect will only run onece to get data from local storage
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use effect run everytime when app starts but this one will work whne todos or status changes
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  ///save to loacl

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos =  JSON.parse(localStorage.getItem("todos")); 
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Lets DO ToDo</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <ToDoList
        filteredtodos={filteredtodos}
        todos={todos}
        setTodos={setTodos}
      ></ToDoList>
    </div>
  );
}

export default App;
