import { BrowserRouter as Router, Switch, 
  Route, Redirect, BrowserRouter,Routes} from "react-router-dom";

import React from 'react';
import './Styles/HeaderStyle.css'
import Header from './Layout/Header'
import HomePage from './Pages/HomePage';
import Footer from './Layout/Footer'
import MenuPage from './Pages/MenuPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
