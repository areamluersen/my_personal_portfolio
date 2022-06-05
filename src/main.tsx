import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/OldLayout/Home';
import { SimpleHome } from './components/SimpleHome';

function Places() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/old" element={<Home />} />
        <Route path="/" element={<SimpleHome />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Places />
  </Router>
);
