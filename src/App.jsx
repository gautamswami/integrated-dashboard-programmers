import React from "react";
import useLocalStorage from "use-local-storage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  return (
    <div data-theme={theme} className="rootContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
