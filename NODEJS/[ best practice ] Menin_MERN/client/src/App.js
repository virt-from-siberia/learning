import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import "materialize-css";
import "./style.css";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";

function App() {
    const { token, login, logout, userId, ready } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    if (!ready) {
        return <Loader />;
    }
    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                userId,
                isAuthenticated,
            }}
        >
            <Route>
                {isAuthenticated && <NavBar />}
                <div className='container'>{routes}</div>
            </Route>
        </AuthContext.Provider>
    );
}

export default App;
