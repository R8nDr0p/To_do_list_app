import { useState } from "react";

function TodoForm({ addTask }) {
  const [Title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Title.trim()) {
      addTask(Title);
      setTitle("");
    }
  };

  return (
    <>
      <div className="container">
        <form className="row mb-5" onSubmit={handleSubmit}>
          <div className="col input-group">
            <input
              className="form-control"
              type="text"
              placeholder="What Do you want to do?"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">
              Add ➕
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
