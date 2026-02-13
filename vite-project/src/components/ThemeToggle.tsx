export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 rounded-xl text-sm font-semibold bg-gray-200 dark:bg-gray-600 dark:text-white"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
