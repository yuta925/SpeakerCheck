import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Practice from './pages/practice';
import Create from './pages/create';
import Select from './pages/select';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/practice">Practice</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/select">Select</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/create" element={<Create />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


{/*function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> 
    </Router>
  );
}

*/}

export default App;
