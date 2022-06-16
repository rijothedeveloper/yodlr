import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserRegisteration from "./views/UserRegisteration";
import AdminDash from "./views/AdminDash";
import { Home } from "./views/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<UserRegisteration />} />
          <Route path="/admin" element={<AdminDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
