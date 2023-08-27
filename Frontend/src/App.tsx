import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Practice from "./pages/practice";
import Create from "./pages/create";
import Select from "./pages/select";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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

export default App;
