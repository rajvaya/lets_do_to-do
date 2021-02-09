function Todo({text ,todos , setTodos ,todo}) {


   //Events 

   const delHandler = (e)=>{
       console.log(todo)
     setTodos(todos.filter((el)=> el.id !== todo.id));
   };

   const completeHandler = (e)=>{
    setTodos(

        todos.map((item)=>{

            if(item.id === todo.id)
            {
                return {...item , completed:!item.completed}
            }
             return item;
        })

    )
   };

    return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : '' }`}> {text} </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
    
      <button className="trash-btn" onClick={delHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
