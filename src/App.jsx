import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import React from "react";
import { Anasayfa, Gezilecek, Tarihi, Plan } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/anasayfa" />} />
          <Route path="/anasayfa" element={<Anasayfa />} />
          <Route path="/gezilecekk" element={<Navigate to="/gezilecek" />} />
          <Route path="/gezilecek" element={<Gezilecek />} />
          <Route path="/tarih" element={<Navigate to="/tarihi" />} />
          <Route path="/tarihi" element={<Tarihi />} />
          <Route path="/plann" element={<Navigate to="/plan" />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
