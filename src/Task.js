import React, { useState } from "react";
import "./Task.css";

function Task() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex > -1) {
      setNames([...names.slice(0, editIndex), newName, ...names.slice(editIndex + 1)]);
    } else {
      setNames([...names, newName]);
    }
    setNewName("");
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewName(names[index]);
  };

  return (
    <div className="task-container">
      <h1>Names Table</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={newName} onChange={handleInputChange} />
        </label>
        {editIndex > -1 ? (
          <button className="task-save-button" type="submit">Save</button>
        ) : (
          <button className="task-add-button" type="submit">Add Name</button>
        )}
      </form>
      <table className="task-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td>{editIndex === index ? <input type="text" value={newName} onChange={handleInputChange} /> : name}</td>
              <td>
                {editIndex === index ? (
                  <button className="task-save-button" type="submit">Save</button>
                ) : (
                  <button className="task-edit-button" type="button" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;
