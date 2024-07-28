import React from "react";
import styles from "./header.module.css";
import useLocalStorage from "use-local-storage";

function Header() {
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
      <img src="/logo.png" alt="logo" className={styles.headerLogo} />
      <div className={styles.flexCenter}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>All</li>
          <li className={styles.navItem}>Leet Code</li>
          <li className={styles.navItem}>Geeks for Geeks</li>
          <li className={styles.navItem}>Codechef</li>
        </ul>
        <button
          onClick={() =>
            theme === "dark" ? switchTheme("light") : switchTheme("dark")
          }
          className={styles.toggleButtons}
        >
          {theme === "dark" ? (
            <img
              src="/bulbOff.png"
              alt="dark-mode-toggle"
              className={styles.themeToggle}
            />
          ) : (
            <img
              src="/bulbOn.png"
              alt="dark-mode-toggle"
              className={styles.themeToggle}
            />
          )}{" "}
        </button>
      </div>
    </div>
  );
}

export default Header;
