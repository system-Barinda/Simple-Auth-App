import { useState } from "react";

export default function toDolist() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  // Add task
  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false }
    ]);

    setText("");
  };

  // Toggle complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          To-Do List
        </h1>

        {/* Add Task */}
        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-xl font-semibold hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-center text-gray-400">
              No tasks yet
            </p>
          )}

          {tasks.map(task => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-xl"
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 accent-blue-600"
                />
                <span
                  className={`${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {task.text}
                </span>
              </label>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 font-bold"
                aria-label="Delete task"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
