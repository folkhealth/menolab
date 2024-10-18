import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard"
import Questionaire from "./Questionaire/Questionaire.jsx"
import './assets/base.css'
function ProtectedRoute({ element: Component }) {
  const  isAuthenticated  = true;

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/questionaire" element={<Questionaire />} />
        {/*<Route path="/login" element={<Login />} />*/}
        <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
      </Routes>
    </Router>
  );
}

export default App;
