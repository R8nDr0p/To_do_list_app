function TodoItem({ task, completeTask, deleteTask }) {
  const { id, completed } = task;

  function handleComplete() {
    completeTask(id);
  }

  function handleDelete() {
    deleteTask(id);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleComplete}
          />
          <span className={completed ? "completed" : ""}>{task.title}</span>
          <button onClick={handleDelete}>Delete ❌</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
