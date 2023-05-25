import TodoItem from "./TodoItem";

function TodoList({ tasks, completeTask, deleteTask }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
