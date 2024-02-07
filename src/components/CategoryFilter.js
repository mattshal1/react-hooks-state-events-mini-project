import React, { useEffect, useState } from "react";

function CategoryFilter({ categories, tasks, setTasksArr }) {
  const [select, setSelect] = useState("");
  const [originalTasks, setOriginalTasks] = useState(tasks);

  const changeClassOFButton = (categoryName) => {
      const filterTasksByCategory = originalTasks.filter((item) => categoryName === 'All'? originalTasks : item.category === categoryName);
      setSelect(categoryName);
      setTasksArr(filterTasksByCategory)
  }

  const categoryButton = categories.map((category,id) => {
    return (
      <button
        className={select === category ? 'selected' : ''}
        key={id}
        onClick={() => changeClassOFButton(category)}
        onMouseUp={() => setTasksArr(tasks)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;