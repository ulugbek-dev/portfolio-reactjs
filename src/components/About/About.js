import React from 'react';
import { AboutStyled } from './styled';
import { useHeight } from '@ulugbek-dev/windowsize';
import AboutSvg from './../AboutSvg/AboutSvg';
import { Wrapper } from './../../elements/Wrapper';
import Typed from 'react-typed';
import { useSelector } from 'react-redux';

export default function About() {
    const darkMode = useSelector(state => state.darkMode);
    const height = useHeight();

    return (
        <AboutStyled height={height} darkMode={darkMode}>
            <Wrapper className="wrapper">
                <div className="animation">
                    <AboutSvg />
                </div>
                <div className="content">
                    <p className="hello">Hello <span>!</span></p>
                    <Typed
                        strings={[`I am a Web Developer specializing in Back-end Developer`, `I am a Web Developer specializing in Front-end Development and UI/UX Design. I have been working professionally in these fields for over 2 years. I'm always curious to create, to improvise and to deliver the best design that fits with what user wants and needs.<br /> Very well experienced with HTML, CSS, JavaScript (ES6, jQuery), Bootstrap and etc, as I have done a decent number of front-end projects using these languages and frameworks. My goal is to produce high quality, good organized and SEO-friendly code.`]}
                        typeSpeed={5}
                        backSpeed={40}
                        startDelay={600}
                        smartBackspace={true}
                    />
                </div>
            </Wrapper>
        </AboutStyled>
    );
}