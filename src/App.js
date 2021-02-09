import './App.css';
import { useState } from "react";
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  return (
    <div className="App">
    <header>
    <h1>Lets DO ToDo</h1> 
    </header>
    <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
    <ToDoList todos={todos} setTodos={setTodos}>
    </ToDoList>
    </div>
  );
}

export default App;
