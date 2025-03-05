import React from "react";
import Home from "./components/Home";
const Resultgif = React.lazy(() => import("./components/Resultgif"));
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Resultgif />} />
      </Routes>
    </Router>
  );
}

export default App;
