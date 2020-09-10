import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
    </div>
  );
}

export default App;
