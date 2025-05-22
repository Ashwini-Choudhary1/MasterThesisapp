import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PromptPage from "./PromptPage";
import ResponsePage from "./ResponsePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt/:model" element={<PromptPage />} />
        <Route path="/response/:model" element={<ResponsePage />} />
      </Routes>
    </Router>
  );
}

export default App;
