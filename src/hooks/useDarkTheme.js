import { useEffect, useState } from "react";

const useDarkTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save it to localstorage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
};

export default useDarkTheme;
