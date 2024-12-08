import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <input
      onClick={toggleTheme}
      className="toggle toggle-warning"
      type="checkbox"
      // defaultChecked
      aria-label="Toggle theme"
    />
  );
};

export default ThemeToggle;
