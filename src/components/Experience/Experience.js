import React from 'react';
import { ExperienceStyled } from './styled';
import { Wrapper } from '../../elements/Wrapper';
import { useHeight, useWidth } from '@ulugbek-dev/windowsize';
import { useSelector, useDispatch } from 'react-redux';

export default function Experience() {
    const darkMode = useSelector(state => state.darkMode);
    const height = useHeight();
    const width = useWidth();
    const dispatch = useDispatch();

    const experienceAndEduction = [
        {
            position: "Senior Frontend Engineer",
            duration: "Aug 2023 - Present",
            location: "Cologne, Germany",
            company: "Packiro"
        },
        {
            position: "Frontend Developer",
            duration: "Dec 2021 - Jul 2023",
            location: "Hamburg, Germany",
            company: "Sport Alliance"
        },
        {
            position: "Software Engineer",
            duration: "Apr 2021 - Dec 2021",
            location: "Kuala-Lumpur, Malaysia",
            company: "REA Group"
        },
        {
            position: "Front-End Developer",
            duration: "Oct 2017 - Feb 2021",
            location: "Cyberjaya, Malaysia",
            company: "Centre for Content Creation"
        },
        {
            position: "Data Management (part-time)",
            duration: "Sep 2016 - Aug 2019",
            location: "Hong-Kong (remotely)",
            company: "Goxip"
        },
        {
            position: "Database Administrator",
            duration: "Dec 2015 - Feb 2016",
            location: "Dushanbe, Tajikistan",
            company: "Auto 2004"
        },
        {
            position: "Bachelor's Degree, Information Technology",
            duration: "Aug 2014 - July 2017",
            location: "Cyberjaya, Malaysia",
            company: "Limkokwing University of Creative Technology"
        },
        {
            position: "High School Diploma",
            duration: "Sep 2007 - May 2012",
            location: "Dushanbe, Tajikistan",
            company: "Tajik-Turkish economy high school"
        }
    ];

    // Scroll top Navbar size
    const handleScroll = e => {
        dispatch({ type: 'NAV_SCROLL', payload: e.target.scrollTop });
    }

    return (
        <ExperienceStyled 
            height={height} 
            length={experienceAndEduction} 
            darkMode={darkMode}
            onScroll={handleScroll}
        >
            <Wrapper className="wrapper">
                <div className="milestone">
                    {experienceAndEduction.map((e, i) => (
                        <div key={i} className={`item ${i % 2 && width > 512 ? '' : 'reverse'}`}>
                            <div className="left">
                                <h3>{e.position}</h3>
                            </div>
                            <div className="right">
                                <p>{e.company}</p>
                                <p>{e.location}</p>
                                <small>{e.duration}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </ExperienceStyled>
    );
}