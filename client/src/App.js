import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./component/Register";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="" element="" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
