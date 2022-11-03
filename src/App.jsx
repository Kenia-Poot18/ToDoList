import { useState } from 'react'
import Formulario from '../components/Formulario';
import ToDoList from '../components/ToDoList';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	const [todos, setTodos] = useState([]);

	const handleClickForm = (task) => {
		if (task.trim() === '') return;
		const newTask = {
			id: Date.now().toString(),
			task: task,
			completed: false,
		};
		setTodos([...todos, newTask]);
	};

	const toogleCompleted = (id) => {
		const newTodos = [...todos];
		const newTask = todos.find((i) => i.id === id);
		newTask.completed = !newTask.completed;
		setTodos(newTodos);
	};

	const handleClickDelete = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	return (
		<>
			<nav className='navbar navbar-dark bg-black text-light p-3'>
				<h1 className='mx-auto text-center fw-bold'>
					ToDo <br />
					<div className='fs-4 mt-2'>Drag & Drop</div>
				</h1>
			</nav>
			<div className='container todo-container'>
				<Formulario
					handleClick={handleClickForm}
					handleClickDelete={handleClickDelete}
				/>
				<ToDoList
					todos={todos}
					toogleCompleted={toogleCompleted}
					setTodos={setTodos}
				/>
			</div>
		</>
	);
}

export default App;
