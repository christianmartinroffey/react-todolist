import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {

        setTodos(todos.filter(element => element.id !== todo.id))

    };

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
            return {
                ...item, completed: !item.completed
            };
        }
            return item;
        })
    )};

return (

<div className="todo pt-2">
    <li className={`todo-item form-control  ${todo.completed ? "completed" : ""}`}>{text}</li>
    <button onClick={completedHandler} className="completed-btn">
        <i className="badge rounded-pill bg-success input-group-text">DONE</i>
    </button>
    <button onClick={deleteHandler} className="delete-btn ">
        <i className="input-group-text badge rounded-pill bg-danger">X</i>
    </button>
</div>
);

};

export default Todo;