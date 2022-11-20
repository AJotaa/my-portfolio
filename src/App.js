import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheFooter from "./components/layout/TheFooter";
import TheHeader from "./components/layout/TheHeader";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path='*' exact element={<NotFoundPage />} />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
