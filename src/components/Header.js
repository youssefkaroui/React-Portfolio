import React, { Component } from "react";
import { Route, Routes, HashRouter,  } from "react-router-dom";
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
          <Route exact path="/" element={<AboutMe/>} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default Header;