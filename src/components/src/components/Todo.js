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

<div className="container pt-2 d-flex">
    <li className={`todo-item form-control  ${todo.completed ? "completed" : ""}`}>{text}</li>
    <button onClick={completedHandler} className="input-group-text completed-btn bg-success m-2">
        <i className=" fas fa-check"></i>
    </button>
    <button onClick={deleteHandler} className="input-group-text delete-btn bg-danger m-2">
        <i className="fas fa-regular fa-trash"></i>
    </button>
</div>
);

};

export default Todo;