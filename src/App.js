import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Routes and Route

import Home from '../src/components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Using 'element' prop */}
        {/* <Route path="/page/:page" element={<Home />} /> Using 'element' prop */}
      </Routes>
    </Router>
  );
}

export default App;
