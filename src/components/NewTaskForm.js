import React,{useState} from "react";

function NewTaskForm({ value,categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: 'task',
    category: 'category'
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    setNewTask({
      ...newTask,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTask)
  }
  const options = categories.map((category) => {
    if (category !== "All") {
      return <option key={category}>{category}</option>;
    }
  });
  return (
    <form className="new-task-form" onSubmit={(e)=> handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" value={value} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => handleChange(e)}>{options}</select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}


export default NewTaskForm;