import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Practice from './components/practice';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/practice">Practice</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Practice />} />
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
