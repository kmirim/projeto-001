import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import MenuAppBar from './MenuAppBar';
import Cadastro from './Cadastro';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;