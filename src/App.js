import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import './Styles/HeaderStyle.css';
import Header from './Layout/Header';
import HomePage from './Pages/HomePage';
import Footer from './Layout/Footer';
import MenuPage from './Pages/MenuPage';
import AboutUsPage from "./Pages/AboutUsPage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Set ComicsAndCoaster as the start page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/landing" element={<LandingPage />} />
          {/* Redirect unknown routes to the home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
