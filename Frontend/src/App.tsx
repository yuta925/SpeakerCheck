import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Practice from "./pages/practice";
import Create from "./pages/create";
import Select from "./pages/select";
import Scoring from "./pages/scoring"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/create" element={<Create />} />
            <Route path="/select" element={<Select />} />
            <Route path="/scoring" element={<Scoring />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
