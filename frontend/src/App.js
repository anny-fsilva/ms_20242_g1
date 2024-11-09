import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'; // Importando o componente Login
import Cadastro from './pages/Signup/Signup'; // Importando o componente Cadastro

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Página de Login */}
          <Route path="/cadastro" element={<Cadastro />} /> {/* Página de Cadastro */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
