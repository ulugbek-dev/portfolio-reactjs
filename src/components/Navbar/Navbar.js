import React, { useState, useEffect } from 'react';
import { NavbarStyled } from './styled';
import { Wrapper } from './../../elements/Wrapper';
import ModeToggle from './../ModeToggle/ModeToggle';
import { NavLink } from 'react-router-dom';
import Socials from './../Socials/Socials';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Navbar() {
    const darkMode = useSelector(state => state.darkMode);

    // Scroll top offset
    const [scrollTop, setScrollTop] = useState(0);

    // Scroll top Navbar size
    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScrollTop(window.scrollY);
        });

        return () => {
            document.removeEventListener('scroll', () => {
                setScrollTop(window.scrollY);
            });
        }
    });

    // Scroll to top
    const { pathname } = useLocation();
      
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <NavbarStyled darkMode={darkMode} scrollTop={scrollTop > 30 ? true : false}>
            <Wrapper className="wrapper">
                <ul>
                    <NavLink exact to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/experience-and-education">
                        <li>Experience & Eduction</li>
                    </NavLink>
                    <NavLink to="/portfolio">
                        <li>Portfolio</li>
                    </NavLink>
                </ul>

                <div className="left">
                    <Socials />
                    <ModeToggle />
                </div>
            </Wrapper>
        </NavbarStyled>
    );
}