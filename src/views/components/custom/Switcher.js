import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkTheme from "../../../hooks/useDarkTheme";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkTheme, setDarkTheme] = useState(
    colorTheme === "light" ? true : false
  );

  const toggoleTheme = (checked) => {
    setTheme(colorTheme);
    setDarkTheme(checked);
  };
  return (
    <div className="flex flex-col items-center">
      <DarkModeSwitch checked={darkTheme} onChange={toggoleTheme} size={19} />
    </div>
  );
};

export default Switcher;
