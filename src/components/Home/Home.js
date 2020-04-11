import React from 'react';
import { HomeStyled } from './styled';
import { Wrapper } from '../../styled/Wrapper';
import { useSelector } from 'react-redux';
import Name from '../Name/Name';
import LazyLink from './LazyLink';

export default function Home() {
    const state = useSelector(state => state);

    return (
        <HomeStyled dark={state.darkMode}>
            <Wrapper column justifyCenter alignCenter>
                <Name name="Ulugbek Abduloev" />
                
                <LazyLink to='/about-me' delay='1000'>
                    About me 
                    <span className="arrow"></span>
                </LazyLink>
            </Wrapper>
        </HomeStyled>
    )
}