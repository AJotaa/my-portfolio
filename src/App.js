import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheFooter from "./components/layout/TheFooter";
import TheHeader from "./components/layout/TheHeader";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
