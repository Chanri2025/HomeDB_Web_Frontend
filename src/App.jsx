import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Navbar from "@/Component/Navbar/Page"; // Import Navbar
import Login from "@/Component/LoginForm/Page";
import Menu from "@/Component/Menu/Page";
import CriminalDatabase from "@/Component/CriminalDatabase/Page";
import ActiveSuspectedVictims from "@/Component/ActiveSuspectedVictims/Page";

const PrivateRoute = ({element}) => {
    return localStorage.getItem("isAuthenticated") ? element : <Navigate to="/login"/>;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>

                {/* Routes with Navbar */}
                <Route
                    path="/menu"
                    element={
                        <>
                            <Navbar/>
                            <Menu/>
                        </>
                    }
                />
                <Route
                    path="/criminal-database"
                    element={
                        <>
                            <Navbar/>
                            <CriminalDatabase/>
                        </>
                    }
                />
                <Route
                    path="/active-suspected-victims"
                    element={
                        <>
                            <Navbar/>
                            <ActiveSuspectedVictims/>
                        </>
                    }
                />

                {/* Redirect root to login */}
                <Route path="/" element={<Navigate to="/login" replace/>}/>

                {/* Catch-all for unknown routes */}
                <Route path="*" element={<Navigate to="/login" replace/>}/>
            </Routes>
        </Router>
    );
};

export default App;
