import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

import './App.scss';
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Donate from './components/pages/Donate/Donate';
import ContactUs from './components/pages/ContactUs/ContactUs';
import NotFound from './components/pages/NotFound/NotFound';

function App() {

  const [loading, setLoading] = useState(true);

  const fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(false);
      }
    })
  })

  if (loading) {
    return null; // app is not ready (fake request is in process);
  }

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
              <Route path="/about" exact component={About} />
              <Route path="/donate" exact component={Donate} />
              <Route path="/contact-us" exact component={ContactUs} />
              <Route path="" component={NotFound} />
            </Switch>

          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
