import { useState } from "react";

function Seven() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      setTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    const updateList = todoList.filter((_, index) => index !== indexToRemove);
    setTodoList(updateList);
  };
  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Seven;
