function TodoItem({ task, completeTask, deleteTask }) {
  const { id, completed } = task;
  console.log(task);

  function handleComplete() {
    completeTask(id);
  }

  function handleDelete() {
    deleteTask(id);
  }

  return (
    <div className="container">
      <div
        className="row mb-5 rounded border"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="col">
          <input
            className="form-check-input"
            type="checkbox"
            checked={completed}
            onChange={handleComplete}
          />
          <span
            className="fw-bold fs-5"
            style={{ backgroundColor: completed ? "green" : "" }}
          >
            {task.title}
          </span>
          <hr />
          <div>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
