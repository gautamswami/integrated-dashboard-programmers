import { useContext } from "react";
import { DataContext } from "../App";

export default function Sidebar() {
    const context = useContext(DataContext);
    const { activeTab, setActiveTab } = context;
    return (
        <div className="w-64 bg-transparent text-white h-screen fixed left-0 top-0 p-4">
          <div className="bg-indigo-600 h-[80%] mt-[8%] rounded-lg">
            
            <nav className="pt-4">
                {["GFG","LEETCODE", "CODECHEF", "CODEWARS"].map((platform) => (
                    <button
                        onClick={() => setActiveTab(platform)}
                        key={platform}
                        className={`block py-3 w-full ${activeTab === platform ? 'bg-slate-50 text-black shadow-inner hover:bg-slate-200' : 'hover:bg-indigo-700' } text-center  rounded transition-colors mb-2`}>
                        {platform}
                    </button>
                ))}
            </nav>
            </div>
        </div>
    );
}
