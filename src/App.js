import { BrowserRouter as Router, Switch, 
  Route, Redirect, BrowserRouter,Routes} from "react-router-dom";

import React from 'react';
import './Styles/HeaderStyle.css'
import Header from './Layout/Header'
import HomePage from './Pages/HomePage';
import Footer from './Layout/Footer'
import MenuPage from './Pages/MenuPage';
import AboutUsPage from "./Pages/AboutUsPage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
     <HashRouter basename="/">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
        <Footer/>
      </div>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
