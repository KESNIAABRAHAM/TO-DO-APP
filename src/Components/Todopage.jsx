import React, { useState } from "react";
import logo from "../images/check.png";

const Todopage = ({userName}) => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskinput] = useState("");

  // Update task input value
  const handleInputChange = (e) => {
    setTaskinput(e.target.value);
  };

  // Add a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, name: taskInput, completed: false },
    ]);

    setTaskinput("");
  };

  // Toggle task completion
  const handleToggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen h-full bg-green-700">
      <div className="container bg-gray-600 rounded-lg shadow-lg w-[700px] h-[600px] flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className="w-40 h-40 mb-4" />


        <h2 className="text-lg font-medium text-gray-800 mb-8">
            Welcome, {userName}! Let's manage your tasks
           </h2>

        <form action="" onSubmit={handleSubmit} className="w-full px-8">
          <div className="mb-4 flex items-center justify-between">


            <input
              type="text"
              value={taskInput}
              onChange={handleInputChange}
              placeholder="Enter a Task here"
              className="w-full text-center p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="bg-green-800 text-white px-4 py-2 ml-4 w-32 rounded-lg hover:bg-green-700 transition duration-300 justify-center"
            >
              Add Task
            </button>

          </div>

          {/* Scrollable Task List */}
          <section className="bg-slate-400 p-4 rounded-lg shadow-inner max-h-64 overflow-y-auto">
            <ul className="list-decimal pl-5 space-y-2">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`py-2 px-3 bg-white rounded-md shadow-sm flex items-center justify-between ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-2">
                      {task.id}. {task.name}
                    </span>
                    <button
                      onClick={() => handleToggleCompletion(task.id)}
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        task.completed
                          ? "bg-green-600 text-white"
                          : "bg-green-200 text-green-800"
                      }`}
                    >
                      {task.completed ? "Undo" : "Check"}
                    </button>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-xs font-semibold px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Todopage;
