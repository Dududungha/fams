import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home.tsx';
import FamsPage from './FamsPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fams" element={<FamsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
