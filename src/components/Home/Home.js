import React from 'react';
import { HomeStyled } from './styled';
import Name from '../Name/Name';
import { useHeight } from '@ulugbek-dev/windowsize';
import { useSelector } from 'react-redux';
import NavLinkWithSound from '../NavLinkWithSound/NavLinkWithSound';

export default function Home() {
    const darkMode = useSelector(state => state.darkMode)
    const height = useHeight();

    return (
        <HomeStyled height={height} darkMode={darkMode}>
            <Name name="Ulugbek Abduloev" />
            <NavLinkWithSound to="/about">About me</NavLinkWithSound>
        </HomeStyled>
    );
}