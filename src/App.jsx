import Profile from "./components/Profile";
import Todo from "./components/Todo";
import "./styles.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const profileData = {
    name: "Tushar Agarwal",
    age: 20,
    image: "./profile.jpg",
    location: "Delhi",
    organisation: "Masai School"
  };

  const todoData = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ];

  const [task, setTask] = React.useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const getStatus = () => {
    return document.getElementById("status").checked;
  };

  const [todoList, setTodo] = React.useState(todoData);

  const addTask = () => {
    const payload = {
      id: uuidv4(),
      title: task,
      status: getStatus()
    };

    let newTask = [...todoList, payload];

    setTodo(newTask);
  };

  return (
    <div className="App">
      <div className="profileComponent">
        <Profile data={profileData} />
      </div>
      <div className="todoSection">
        <div>
          <input
            type="text"
            value={task}
            onChange={handleTask}
            placeholder="Add task"
          />
          <input type="checkbox" id="status" />
          <button onClick={addTask}>ADD</button>
        </div>
        <h1>TODO LIST</h1>
        {todoList.map((item) => {
          return <Todo todoItem={item} />;
        })}
      </div>
    </div>
  );
}
