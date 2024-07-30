import React from "react";
import Home from "./components/Home.jsx";
// import logo from "./logo.svg";
// import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />

          {/* <Route path="/signin" element={<LogIn />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
