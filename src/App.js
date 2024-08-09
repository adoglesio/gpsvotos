import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Cadastro from './components/Cadastro';
import Relatorio from './components/Relatorio';
import Sobre from './components/Sobre';
import Desenvolvedor from './components/Desenvolvedor';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/desenvolvedor" element={<Desenvolvedor />} />
      </Routes>
    </Router>
  );
};

export default App;
