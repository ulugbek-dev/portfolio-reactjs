import React from 'react';
import { Content } from '../styled/Content';
import { Wrapper } from '../styled/Wrapper';
import { useSelector } from 'react-redux';
import About from './About';
import Education from './Education';

export default function ThreeSections() {
    const state = useSelector(state => state);

    return (
        <Content dark={state.darkMode} out={state.animation}>
            <Wrapper>
                <About />
            </Wrapper>
            <Wrapper block>
                <Education />
            </Wrapper>
        </Content>
    );
}