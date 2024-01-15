import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ManageMenu from "./pages/ManageMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MenuPage" element={<ManageMenu />}></Route>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
