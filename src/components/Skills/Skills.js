import React from 'react';
import { SkillsStyled } from './styled';
import SkillsSvg from './../SkillsSvg/SkillsSvg';
import { Wrapper } from './../../elements/Wrapper';
import { useSelector } from 'react-redux';
import { useHeight } from '@ulugbek-dev/windowsize';
import Slider from 'react-slick';

// Skills images
import adobexd from './../../img/skills/adobexd.png';
import bootstrap from './../../img/skills/bootstrap.png';
import css from './../../img/skills/css.png';
import ee from './../../img/skills/ee.png';
import git from './../../img/skills/git.png';
import html from './../../img/skills/html.png';
import javascript from './../../img/skills/javascript.png';
import jquery from './../../img/skills/jquery.png';
import mongodb from './../../img/skills/mongodb.png';
import nextjs from './../../img/skills/nextjs.png';
import photoshop from './../../img/skills/photoshop.png';
import reactjs from './../../img/skills/reactjs.png';
import sass from './../../img/skills/sass.png';
import styledcomponents from './../../img/skills/styledcomponents.png';

export default function Skills() {
    const darkMode = useSelector(state => state.darkMode);
    const height = useHeight();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    const skills = [
        {name: "HTML", img: html},
        {name: "CSS", img: css},
        {name: "JavaScript", img: javascript},
        {name: "Bootstrap", img: bootstrap},
        {name: "ReactJS", img: reactjs},
        {name: "NextJS", img: nextjs},
        {name: "Styled Components", img: styledcomponents},
        {name: "Git", img: git},
        {name: "jQuery", img: jquery},
        {name: "SaSS", img: sass},
        {name: "MongoDB", img: mongodb},
        {name: "Adobe XD", img: adobexd},
        {name: "Photoshop", img: photoshop},
        {name: "Expression Engine", img: ee},
    ]

    return (
        <SkillsStyled height={height} darkMode={darkMode}>
            <Wrapper className="wrapper">
                <SkillsSvg />
                
                <Slider {...settings}>
                    {skills.map((s, i) => (
                        <div className="item" key={i}>
                            <img src={s.img} alt={s.name}/>
                            <p>{s.name}</p>
                        </div>
                    ))}
                </Slider>
            </Wrapper>
        </SkillsStyled>
    );
}