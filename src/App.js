import React from 'react';
import Home from './components/sections/Home';
import Mode from './components/include/Mode';
import Navbar from './components/include/Navbar';
import { useSelector } from 'react-redux';

export default function App() {
  const darkMode = useSelector(state => state.darkMode);
  
  return (
    <div className={darkMode && 'darkmode'}>
      <Mode />
      <Navbar />
      
      <Home />
    </div>
  );
}