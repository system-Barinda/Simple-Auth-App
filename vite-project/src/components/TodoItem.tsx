import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
};

export default function TodoItem({
  task,
  onToggle,
  onDelete,
  onEdit,
}: Readonly<TodoItemProps>) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(task.text);

  const saveEdit = (): void => {
    if (!editText.trim()) return;
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 accent-blue-600"
        />

        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-2 py-1 rounded border focus:outline-none"
          />
        ) : (
          <span
            className={`flex-1 ${
              task.completed
                ? "line-through text-gray-400"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button onClick={saveEdit} className="text-green-600 font-semibold">
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 font-semibold"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 font-bold"
        >
          ✕
        </button>
      </div>
    </li>
  );
}
