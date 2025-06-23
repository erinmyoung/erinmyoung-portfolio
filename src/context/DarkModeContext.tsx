import {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { DarkModeContextType } from "../types";

const initialValue: DarkModeContextType = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
  toggleTheme: () => {},
};

const DarkModeContext = createContext<DarkModeContextType>(initialValue);

export const useTheme = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(initialValue.darkMode);

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    document.documentElement.classList.toggle("dark", darkMode);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
