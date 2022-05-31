import React, { useState } from "react";
import ToDoForm from "./TodoForm.jsx";
import Todo from "./Todo.jsx"

//needs to be inside a function
// can use state as props

const ToDoList = (props) => {
	const [toDo, settoDo] = useState([]);

	const addToDo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const completeTodo = id => 

};

export default ToDoList;
