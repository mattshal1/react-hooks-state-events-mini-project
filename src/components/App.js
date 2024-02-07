import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as UUID } from "uuid";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasksArr, setTasksArr] = useState(TASKS);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState(CATEGORIES[1]);

  const IDToTasks = () => {
    const addIDToTasks = tasksArr.map((task) => {
      return {
        ...task,
        id: UUID(),
      };
    });
    setTasksArr(addIDToTasks);
  };

  const addNewTask = (newTask) => {
    setTasksArr((prevTask) => [...prevTask, newTask]);
    setValue("");
    setCategory(CATEGORIES[1]);
  };

  useEffect(() => {
    IDToTasks();
  }, []);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        tasks={tasksArr}
        setTasksArr={setTasksArr}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={addNewTask}
        value={value}
      />
      <TaskList tasks={tasksArr} setTasksArr={setTasksArr} />
    </div>
  );
}

export default App;