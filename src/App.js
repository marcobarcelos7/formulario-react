import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';
import React from 'react';

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
