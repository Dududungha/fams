import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './Home.tsx';
import Fams from './Fams.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fams" element={<Fams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
