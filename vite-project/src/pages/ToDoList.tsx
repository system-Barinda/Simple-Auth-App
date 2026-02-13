import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import ThemeToggle from "../components/ThemeToggle";

export default function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              To-Do List
            </h1>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <TodoForm onAdd={addTask} />

          <ul className="space-y-3 mt-4">
            {tasks.length === 0 && (
              <p className="text-center text-gray-400">
                No tasks yet
              </p>
            )}

            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}