import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize navigation

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dummy authentication (Replace with actual backend API call)
        if (email === "admin@db.com" && password === "admin123") {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("user_name", "Admin"); // Store username
            navigate("/menu"); // Redirect to Menu
        } else {
            setError("Invalid credentials. Please try again.");
        }
    };


    // Redirect if already logged in
    if (localStorage.getItem("isAuthenticated") === "true") {
        navigate("/menu");
    }

    return (
        <div
            className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm rounded-xl bg-gray-800 p-6 shadow-2xl"
            >
                <h2 className="mb-6 text-center text-3xl font-bold text-white tracking-wider">
                    HOME DB Login
                </h2>

                {/* Email Field */}
                <div className="mb-4 flex flex-col space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-200 tracking-wide"
                    >
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-2 flex flex-col space-y-2">
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-200 tracking-wide"
                    >
                        Password
                    </label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Forgot Password (Centered) */}
                <div className="mb-4 text-center">
                    <a
                        href="#"
                        className="text-sm text-blue-400 hover:underline focus:outline-none"
                    >
                        Forgot password?
                    </a>
                </div>

                {/* Error Message */}
                {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-blue-600 py-2 text-lg font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    Login
                </Button>

                {/* Divider */}
                <div className="mt-6 flex items-center justify-center">
                    <div className="h-px w-1/3 bg-gray-700"/>
                    <span className="mx-2 text-sm text-gray-400">or</span>
                    <div className="h-px w-1/3 bg-gray-700"/>
                </div>

                {/* Sign-up / other call-to-action */}
                <p className="mt-6 text-center text-sm text-gray-400">
                    Don’t have an account?{" "}
                    <a
                        href="#"
                        className="font-semibold text-blue-400 hover:underline focus:outline-none"
                    >
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
