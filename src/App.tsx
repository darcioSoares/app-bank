import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import LandPage from './components/pages/langPage';
import Login from './components/pages/Login';
// import CardCredit from './components/pages/CardCredit';
import AboutBook from './components/pages/AboutBook';

function App() {
  return (
    <Router>
      <Routes>        
        {/* Rotas com Header e Footer */}
        <Route path="/" element={<MainLayout> <LandPage /> </MainLayout>} />

        {/* Rota sem Header e Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/teste" element={<AboutBook />} />

      </Routes>
    </Router>
  );
}

export default App;
