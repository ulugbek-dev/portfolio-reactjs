import React from 'react';
import { HomeStyled } from './styled';
import Name from '../Name/Name';
import { Link } from 'react-router-dom';
import { useHeight } from '@ulugbek-dev/windowsize';

export default function Home() {
    const height = useHeight();

    return (
        <HomeStyled height={height}>
            <Name name="Ulugbek Abduloev" />
            <Link to="/about">About me</Link>
        </HomeStyled>
    );
}