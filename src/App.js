import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Donate from './components/pages/Donate/Donate';
import ContactUs from './components/pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="app">
      <Nav />

      <Route render={({ location }) => (

        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={750}
            classNames="fade"
          >
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/donate" component={Donate} />
              <Route path="/contact-us" component={ContactUs} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

      )} />
    </div>
  );
}

export default App;
