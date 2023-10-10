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
          <Route exact path="/" render={() => <Navigate to="/about" />} />
          <Route path="/about" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default Header;