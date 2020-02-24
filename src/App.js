import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Mode from './components/include/Mode';
import Navbar from './components/include/Navbar';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

export default function App() {
  const state = useSelector(state => state);

  return (
    <div className={state.darkMode ? 'darkmode' : ''}>
      <Mode />
      <Navbar />
      
      <Route path="/" exact render={() => <Home />} />
      <Route path="/about-me" exact render={() => <About />} />
    </div>
  );
}