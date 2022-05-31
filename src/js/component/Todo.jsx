import React, {useState} from "react";
import TodoForm from "./TodoForm.jsx";
import ToDoList from "./todoList";


function Todo(todos, completeTodo) {
const [edit, setEdit] = useState({
    id: null,
    value: ""
});

return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key= {todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons ">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>
    </div>
    ))};

export default Todo;
