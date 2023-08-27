import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Practice from './pages/practice';
import Create from './pages/create';
import Select from './pages/select';
import Result from './pages/result';//テスト用

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
      <p><Link to="/">Home</Link></p>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/create" element={<Create />} />
          <Route path="/select" element={<Select />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
