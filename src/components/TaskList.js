import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasksArr }) {
  const deleteHandle = (id) => {
    const updateTasks = tasks.filter((item) => item.id !== id);
    setTasksArr(updateTasks);
  };

  const taskItem = tasks.map((item) => {
    return (
      <Task
        key={item.id}
        tasks={tasks}
        setTasksArr={setTasksArr}
        text={item.text}
        category={item.category}
        deleteBtn={() => deleteHandle(item.id)}
      />
    );
  });

  return <div className="tasks">{taskItem}</div>;
}

export default TaskList;