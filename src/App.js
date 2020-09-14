import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Donate from './components/pages/Donate/Donate';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/donate" component={Donate} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
