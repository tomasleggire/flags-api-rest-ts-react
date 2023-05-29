import { useState, useEffect } from "react";

export default function useToggleTheme() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
}
