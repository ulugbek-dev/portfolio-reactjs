import React from 'react';
import { AboutMe } from './styled';
import myPicture from './../../img/ulugbek.jpg'
import { useSelector } from 'react-redux';

export default function About() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <AboutMe dark={darkMode}>
            <div className="img">
                <img src={myPicture} alt="Ulugbek Abduloev" />
            </div>
            <div className="text">
                <b>Hello<span>!</span></b>
                <p>I am a Web Developer specializing in Front-end Development and UI/UX Design. I have been working professionally in these fields for over 2 years. I'm always curious to create, to improvise and to deliver the best design that fits with what user wants and needs.
                <br />
                Very well experienced with HTML, CSS, JavaScript (ES6, jQuery), Bootstrap and etc, as I have done a decent number of front-end projects using these languages and frameworks. My goal is to produce high quality, good organized and SEO-friendly code.</p>
            </div>
        </AboutMe>
    );
}