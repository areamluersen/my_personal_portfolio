import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import { NewLayout } from './components/NewLayout';

function Places() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewLayout />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Places />
  </Router>
);
