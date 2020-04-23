import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router-dom';
import { AppStyled } from './styled';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function App() {
    return (
    <AppStyled>
      <Navbar />

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="animate"
              timeout={900}
            >
              <Switch location={location}>
                <Route path="/about" exact render={() => <About />} />
                <Route path="/" render={() => <Home />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />

    </AppStyled>
  );
}