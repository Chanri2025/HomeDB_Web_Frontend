import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiDatabase, FiUsers } from "react-icons/fi"; // Changed Icon

const Menu = () => {
    const navigate = useNavigate();

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated"); // Clear login state
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 transition-all duration-300">
            <h1 className="text-3xl font-bold mb-6 transition-all duration-300">Menu</h1>

            {/* Menu Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Criminal Database Card */}
                <Link
                    to="/criminal-database"
                    className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 w-60 h-44"
                >
                    <FiDatabase className="text-blue-500 text-5xl mb-3 transition-all duration-300" />
                    <span className="text-lg font-semibold transition-all duration-300">Criminal Database</span>
                </Link>

                {/* Active Hotels Users Card */}
                <Link
                    to="/active-hotels-users"
                    className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 w-60 h-44"
                >
                    <FiUsers className="text-green-500 text-5xl mb-3 transition-all duration-300" />
                    <span className="text-lg font-semibold transition-all duration-300">Active Hotels Users</span>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
