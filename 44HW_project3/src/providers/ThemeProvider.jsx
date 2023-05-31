import { createContext, useState } from "react";

export const ThemeContext = createContext(false);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
