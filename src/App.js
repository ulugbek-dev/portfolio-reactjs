import React, { useEffect } from 'react';
import Home from './components/Home/Home';
import DarkMode from './components/DarkMode/DarkMode';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

export default function App() {
  const state = useSelector(state => state);

  useEffect(() => {
    localStorage.setItem('UA-portfolio', JSON.stringify(state))
    
  }, [state]);

  return (
    <div className={state.darkMode ? 'darkmode' : ''}>
      <DarkMode />

      <div className="app">
        <Route path="/" exact render={() => <Home />} />
      </div>
    </div>
  );
}