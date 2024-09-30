import React, { useState, useEffect } from 'react';
import { AboutStyled } from './styled';
import { useHeight, useWidth } from '@ulugbek-dev/windowsize';
import AboutSvg from './../AboutSvg/AboutSvg';
import { Wrapper } from './../../elements/Wrapper';
import Typed from 'react-typed';
import { useSelector, useDispatch } from 'react-redux';

export default function About() {
    const darkMode = useSelector(state => state.darkMode);
    const height = useHeight();
    const width = useWidth();
    const dispatch = useDispatch();

    const [text, setText] = useState([]);
    const aboutMe = 'I am a Senior Front-End Software Engineer with over seven years of experience, I specialize in creating engaging, user-centric web interfaces. My expertise encompasses a broad range of technologies, including HTML, CSS, JavaScript, TypeScript, and advanced frameworks like ReactJS, NextJS, Redux, MobX and etc. My commitment to excellence is reflected in my ability to develop solutions that are both technically sound and aesthetically pleasing, always with an eye towards optimizing user experience and website performance.';

    useEffect(() => {
        if(width <= 512) 
            setText([aboutMe])
        else
            setText([`I am a Senior Back-End `, aboutMe])
    }, [width]);

    
    // Scroll top Navbar size
    const handleScroll = e => {
        dispatch({ type: 'NAV_SCROLL', payload: e.target.scrollTop });
    }

    return (
        <AboutStyled height={height} darkMode={darkMode}>
            <Wrapper className="wrapper" onScroll={e => handleScroll(e)}>
                <div className="animation">
                    <AboutSvg />
                </div>
                <div className="content">
                    <p className="hello">Hello <span>!</span></p>
                    <Typed
                        strings={text}
                        typeSpeed={2}
                        backSpeed={30}
                        backDelay={500}
                        startDelay={400}
                        smartBackspace={true}
                    />
                </div>
            </Wrapper>
        </AboutStyled>
    );
}