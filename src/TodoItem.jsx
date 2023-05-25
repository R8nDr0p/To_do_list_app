function TodoItem({ task, completeTask, deleteTask }) {
  function handleComplete() {
    completeTask(id);
  }

  function handleDelete() {
    deleteTask(id);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="chekbox"
              checked={completed}
              onChange={handleComplete}
            />
            <span className={completed ? "✔" : ""}></span>
            <button onClick={handleDelete}>Delete ❌</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
