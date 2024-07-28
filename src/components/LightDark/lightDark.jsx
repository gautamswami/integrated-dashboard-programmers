import React from 'react'
import styles from "./lightDark.module.css";
import useLocalStorage from "use-local-storage";

function LightDark() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = (data) => {
    setTheme(data);
  };
  return (
    <div data-theme={theme} className={styles.container}>
      <p>SWITCH TO MULTIPLE THEME </p>
      <p>
        1. Initial theme is according to users initial preference <br /> 2. User
        can switch to dark, light, red and green theme <br />
        3. That theme will be set as prefered/saved until user changes that
      </p>
      <button onClick={() => switchTheme("dark")}>SWITCH TO DARK</button>
      <button onClick={() => switchTheme("light")}>SWITCH TO light</button>
      <button onClick={() => switchTheme("red")}>SWITCH TO Red</button>
      <button onClick={() => switchTheme("green")}>SWITCH TO GREEN</button>
    </div>
  );
}

export default LightDark;
