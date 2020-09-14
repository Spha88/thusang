import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Mission from './components/Mission/Mission';
import Help from './components/Help/Help';
import HowToHelp from './components/HowToHelp/HowToHelp';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Mission />
      <Help />
      <HowToHelp />
    </div>
  );
}

export default App;
