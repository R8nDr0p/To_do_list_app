import TodoItem from "./TodoItem";

function TodoList({ tasks, completeTask, deleteTask }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {tasks.map((task) => (
              <TodoItem
                task={task}
                completeItem={completeTask}
                deleteItem={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
