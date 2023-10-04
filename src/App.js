import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/page/1" />} /> {/* Set "page/1" as the default */}
        <Route path="/page/:page" element={<Home />} /> {/* Handle page route */}
      </Routes>
    </Router>
  );
}

export default App;
