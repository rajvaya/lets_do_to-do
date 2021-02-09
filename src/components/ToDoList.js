import Todo from "./Todo";

function ToDoList({ todos, setTodos ,filteredtodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredtodos.map((todo) => (
          <Todo key={todo.id} 
          text={todo.text} 
          todos={todos} 
          todo={todo}
          setTodos={setTodos}>
          
          </Todo>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
