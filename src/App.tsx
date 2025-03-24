
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalculatorGrid from './components/CalculatorGrid';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<CalculatorGrid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
