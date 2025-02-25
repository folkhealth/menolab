import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard.jsx"
import Questionaire from "./Questionaire/Questionaire.jsx"
import './assets/base.css'
// function ProtectedRoute({ element: Component }) {
//   const  isAuthenticated  = true;
//
//   return isAuthenticated ? <Component /> : <Navigate to="/login" />;
// }
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/questionnaire" element={<Questionaire />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/*<Route path="/login" element={<Login />} />*/}
        {/*<Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
