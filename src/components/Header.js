import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import NavigationHandler from "../../components/Navigation";
import Resume from '../../components/Resume';
import AboutMe from "../../components/About";
import Contact from '../../components/Contact';
import Portfolio from "../../components/Portfolio";


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <NavigationHandler />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;