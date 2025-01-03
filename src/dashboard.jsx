"use client";

import { useState, useEffect, useContext } from "react";
import { Sun, Moon } from "lucide-react";
import Sidebar from "./components/sidebar";
import MetricCard from "./components/metric-card";
import PieChart from "./components/charts/pie-chart";
import LineChart from "./components/charts/line-chart";
import ContributionGraph from "./components/contribution-graph";
import { DataContext } from "./App";

export default function Dashboard() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Update the class on the html element when dark mode changes
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const context = useContext(DataContext);
    const { activeTab, setActiveTab } = context;

    return (
        <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
            <Sidebar />
            <div className="ml-64 p-8">
                <div className="flex justify-between items-center mb-8">
                    <div className="relative w-96">
                        <input
                            type="text"
                            placeholder={`Enter ${activeTab} username`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors"
                        aria-label={
                            isDarkMode
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }>
                        {isDarkMode ? (
                            <Sun className="w-6 h-6" />
                        ) : (
                            <Moon className="w-6 h-6" />
                        )}
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                    <MetricCard title="STREAK" value={0} />
                    <MetricCard title="Max Streak" value={0} />
                    <MetricCard title="Problem Solved" value={0} />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    <PieChart />
                    <LineChart />
                </div>

                <ContributionGraph />
            </div>
        </div>
    );
}
