import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router-dom';
import { AppStyled } from './styled';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Experience from '../Experience/Experience';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Portfolio from '../Portfolio/Portfolio';
import { useSelector } from 'react-redux';

export default function App() {
  const darkMode = useSelector(state => state.darkMode) 

  return (
    <AppStyled darkMode={darkMode}>
      <Navbar />

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="animate"
              timeout={1200}
            >
              <Switch location={location}>
                <Route path="/portfolio" render={() => <Portfolio />} />
                <Route path="/experience-and-education" render={() => <Experience />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/" render={() => <Home />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </AppStyled>
  );
}