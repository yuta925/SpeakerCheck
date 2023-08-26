import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Practice from "./pages/practice";
import Create from "./pages/create";
import Select from "./pages/select";
import CharComponent from "./components/Panel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/select">Select</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/create" element={<Create />} />
            <Route path="/select" element={<Select />} />
          </Routes>
        </div>
      </BrowserRouter>
      <CharComponent text="登録した文章がここに表示され、文字制限以上は…で省略されるはずでありましょうともしかしもしもここにある文字が全部読めていればそれは何かしらのバグであるため一体それがなぜ起こっているのかを探究する必要がありましょうともというわけでここでは上記の目的が達せられていればただの独白にもならぬ言葉でいつまでもこのことを忘れていればよろしいのでしょう" />
    </div>
  );
}

export default App;
