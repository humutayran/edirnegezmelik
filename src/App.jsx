import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./app.css";
import React from "react";
import { Anasayfa, Gezilecek, Tarihi, Plan, Icerik } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/gezilecek" element={<Gezilecek />} />
          <Route path="/tarihi" element={<Tarihi />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/icerik" element={<Icerik />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
