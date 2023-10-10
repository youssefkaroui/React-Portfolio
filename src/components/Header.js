import React, { Component } from "react";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import NavigationHandler from "./Navigation";
import Resume from './Resume';
import AboutMe from "./About";
import Contact from './Contact';
import Portfolio from "./Portfolio";


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <NavigationHandler />
        </header>

        <div className="content">
        <Routes>
          <Route exact path="/" element={() => <Navigate to="/about" />} />
          <Route exact path="/" element={<Navigate to="/about" />} />
          <Route exact path="/" element={<Navigate to="/portfolio" />} />  
          <Route exact path="/" element={<Navigate to="/portfolio" />} />   
          <Route exact path="/" element={<Navigate to="/resume" />} />  
        </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default Header;