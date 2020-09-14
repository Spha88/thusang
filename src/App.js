import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Mission from './components/Mission/Mission';
import Help from './components/Help/Help';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Mission />
      <Help />
    </div>
  );
}

export default App;
