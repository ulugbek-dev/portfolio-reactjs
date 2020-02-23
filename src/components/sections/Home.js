import React from 'react';
import { Header } from './../../styled/Header';
import { Wrapper } from './../../styled/Wrapper';
import { useSelector } from 'react-redux';
import Name from './../Name';

export default function Home() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <Header dark={darkMode}>
            <Wrapper justifyCenter>
                <Name name="Ulugbek Abduloev" />
            </Wrapper>
        </Header>
    )
}