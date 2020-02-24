import React from 'react';
import Home from './components/Home';
import ThreeSections from './components/ThreeSections';
import Mode from './components/include/Mode';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

export default function App() {
  const state = useSelector(state => state);

  return (
    <div className={state.darkMode ? 'darkmode' : ''}>
      <Mode />

      <Route path="/" exact render={() => <Home />} />
      <Route path="/about-me" exact render={() => <ThreeSections />} />
    </div>
  );
}