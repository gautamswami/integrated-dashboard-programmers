import { createContext, useState } from "react";
import Dashboard from "./dashboard";
import "./globals.css";
export const DataContext = createContext();
function App() {
    const [activeTab, setActiveTab] = useState("GFG");

    return (
        <DataContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="App">
                <Dashboard />
            </div>
        </DataContext.Provider>
    );
}

export default App;
