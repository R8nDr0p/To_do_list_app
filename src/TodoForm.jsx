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
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="What Do you want to do?"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">
              Add ➕
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoForm;
