import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";

const ToDoList = ({ todos, toogleCompleted, setTodos }) => {
	const reorder = (list, startIndex, endIndex) => {
		const result = [...list];
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	const handleDragEnd = ({ source, destination }) => {
		if (!destination) return;
		if (
			source.index === destination.index &&
			source.droppableId === destination.droppableId
		)
			return;
		setTodos(
			reorder(todos, source.index, destination.index)
		);
	};

	return (
		<>
			<DragDropContext onDragEnd={(e) => handleDragEnd(e)}>
				<div>
					<Droppable droppableId = 'todos'>
						{(droppableProvided, snapshot) => (
							<ul
								className='list-group'
								style={{
									background:
										snapshot.isDraggingOver && '#98c0cd',
								}}
								{...droppableProvided.droppableProps}
								ref={droppableProvided.innerRef}
							>
								{todos.map((todo, index) => (
									<Draggable
										key={todo.id}
										draggableId={todo.id}
										index={index}
									>
										{(draggableProvide, snapshot) => (
											<li
												{...draggableProvide.draggableProps}
												ref={draggableProvide.innerRef}
												{...draggableProvide.dragHandleProps}
												className={
													todo.completed
														? 'list-group-item completed'
														: 'list-group-item'
												}
												style={{
													backgroundColor:
														snapshot.isDragging &&
														'rgb(255 255 255 / .5',
													boxShadow:
														snapshot.isDragging &&
														'5px 5px 10px 3px rgb(44 48 63/ .5)',
													border:
														snapshot.isDragging &&
														'1px solid gray',
													...draggableProvide.draggableProps
														.style,
												}}
												onClick={() =>
													toogleCompleted(todo.id)
												}
												data-bs-toggle='tooltip'
												title='Click toggle completed!'
											>
												<div>{todo.task}</div>
											</li>
										)}
									</Draggable>
								))}
								{droppableProvided.placeholder}
							</ul>
						)}
					</Droppable>
				</div>
			</DragDropContext>
		</>
	);
};
export default ToDoList;
