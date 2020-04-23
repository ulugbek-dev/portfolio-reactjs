import React from 'react';
import { HomeStyled } from './styled';
import Name from '../Name/Name';
import { Link } from 'react-router-dom';
import { useHeight } from '@ulugbek-dev/windowsize';
import { useSelector } from 'react-redux';

export default function Home() {
    const darkMode = useSelector(state => state.darkMode)
    const height = useHeight();

    return (
        <HomeStyled height={height} darkMode={darkMode}>
            <Name name="Ulugbek Abduloev" />
            <Link to="/about">About me</Link>
        </HomeStyled>
    );
}