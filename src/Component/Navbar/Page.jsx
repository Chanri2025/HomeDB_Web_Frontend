import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSun, FiMoon, FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );
    const userName = localStorage.getItem("user_name") || "User";

    // Apply saved theme on mount
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Toggle dark/light mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user_name");
        navigate("/login");
    };

    return (
        <nav className={`w-full px-6 py-4 flex justify-between items-center shadow-md transition-all duration-300
          ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900 shadow-lg"}`}
        >
            {/* App Name */}
            <h1 className="text-xl font-semibold transition-all duration-300">
                Home DB
            </h1>

            {/* Right Side: User Greeting, Theme Toggle & Logout */}
            <div className="flex items-center space-x-6">
                {/* User Greeting */}
                <span className="text-lg font-medium transition-all duration-300">
                    Hi, {userName}
                </span>

                {/* Dark/Light Toggle (Fixed Shadow Issue) */}
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-md transition-all duration-300 focus:outline-none 
                    ${darkMode ? "bg-gray-700 hover:bg-gray-600" 
                    : "bg-gray-300 hover:bg-gray-400"}`}
                    aria-label="Toggle Theme"
                >
                    {darkMode ? (
                        <FiSun className="text-yellow-400 text-2xl transition-all duration-300" />
                    ) : (
                        <FiMoon className="text-blue-500 text-2xl transition-all duration-300" />
                    )}
                </button>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 flex items-center"
                >
                    <FiLogOut className="mr-2 text-xl" />
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
