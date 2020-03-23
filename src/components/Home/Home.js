import React from 'react';
import { HomeStyled } from './styled';
import { Wrapper } from '../../styled/Wrapper';
import { useSelector } from 'react-redux';
import Name from '../Name/Name';
import { Link } from 'react-router-dom';

export default function Home() {
    const state = useSelector(state => state);

    return (
        <HomeStyled dark={state.darkMode}>
            <Wrapper column justifyCenter alignCenter>
                <Name name="Ulugbek Abduloev" />
                
                <Link to="/about-me">
                    About me 
                    <span className="arrow"></span>
                </Link>
            </Wrapper>
        </HomeStyled>
    )
}