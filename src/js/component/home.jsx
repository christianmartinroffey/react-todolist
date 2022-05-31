import React from "react";
import ToDoList from "./todoList.jsx";
import Todo from "./Todo.jsx";
//include images into your bundle.

//create your first component
const Home = () => {
	return (
		<div className="home">
			<h1 className="text-center mt-5">To Do List!</h1>
			<ToDoList onSubmit={addToDo} />
			<Todo todos={todos} completeTodo= {completeTodo}/>
		</div>
	);
};

export default Home;
