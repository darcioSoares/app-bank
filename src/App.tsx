import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import LandPage from './pages/langPage';
import Login from './pages/Login';
import CardCredit from './pages/CardCredit';
import Dashboard from './pages/Dashbord';
import { useEffect, useState } from 'react';
import ProtectedLayout from './components/ProtectedLayout';
//import AboutBook from './components/pages/AboutBook';

// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const auth = localStorage.getItem("authToken"); // Exemplo de verificação de token
//     setIsAuthenticated(!!auth);
//   }, []);

//   return isAuthenticated;
// };

// const ProtectedRoute = ({ element : any }) => {
//   // const isAuthenticated = useAuth();
//   const isAuthenticated = true
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

function App() {
  return (
    <Router>
      <Routes>        
        {/* Rotas com Header e Footer */}
        <Route path="/" element={<MainLayout> <LandPage /> </MainLayout>} />

        {/* Rota sem Header e Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/teste" element={<CardCredit />} />

        <Route path="/dash" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />

        {/* <Route path="/dash" element={<ProtectedRoute element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
