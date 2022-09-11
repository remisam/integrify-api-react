import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import UserDetails from "./screens/UserDetails";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
