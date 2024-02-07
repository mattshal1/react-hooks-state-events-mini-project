import React from "react";

function Task({key, text, category, deleteBtn }) {
  return (
      <div className="task" key={key}>
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={deleteBtn}>
          X
        </button>
      </div>
  );
}

export default Task;