import React from 'react';
import { Header } from './../../styled/Header';
import { Wrapper } from './../../styled/Wrapper';
import { useSelector } from 'react-redux';
import Name from './../Name';
import About from './About';
import { Route } from 'react-router-dom';

export default function Home() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <Header dark={darkMode}>
            <Wrapper justifyCenter>
                <Route path="/" exact render={() => <Name name="Ulugbek Abduloev" />} />
                <Route path="/about-me" exact render={() => <About />} />
            </Wrapper>
        </Header>
    )
}