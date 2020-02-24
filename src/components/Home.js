import React from 'react';
import { Header } from './../styled/Header';
import { Wrapper } from './../styled/Wrapper';
import { useSelector } from 'react-redux';
import Name from './Name';

export default function Home() {
    const state = useSelector(state => state);

    return (
        <Header dark={state.darkMode} out={state.animation}>
            <Wrapper justifyCenter>
                <Name name="Ulugbek Abduloev" />
            </Wrapper>
        </Header>
    )
}