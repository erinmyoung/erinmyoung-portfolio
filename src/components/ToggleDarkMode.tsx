import clsx from "clsx";
import { useTheme } from "../context/DarkModeContext";

export function ToggleDarkMode() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      role="checkbox"
      aria-checked={darkMode ? "true" : "false"}
      tabIndex={0}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={clsx([
        "fixed m-4 right-0 cursor-pointer z-1 w-16 h-7 bg-dark dark:bg-darkmode-primary rounded-full px-2 flex items-center",
        darkMode ? "" : "justify-end",
      ])}
    >
      <div
        aria-label="Toggle circle"
        className={clsx([
          "w-5 h-5 rounded-full absolute transform duration-200 ease-out bg-white left-1",
          darkMode ? "translate-x-9" : "translate-x-0",
        ])}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {darkMode ? (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        ) : (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        )}
      </svg>
    </div>
  );
}
