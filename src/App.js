import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard";
import Questionaire from "./Questionaire/Questionaire";
import './assets/base.css';
function ProtectedRoute({ element: Component }) {
    const isAuthenticated = true;
    return isAuthenticated ? _jsx(Component, {}) : _jsx(Navigate, { to: "/login" });
}
function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/questionaire", element: _jsx(Questionaire, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(ProtectedRoute, { element: Dashboard }) })] }) }));
}
export default App;
