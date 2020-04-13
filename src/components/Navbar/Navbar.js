import React from 'react';
import { NavbarStyled } from './styled';
import { Wrapper } from './../../elements/Wrapper';
import ModeToggle from './../ModeToggle/ModeToggle';
import { Link } from 'react-router-dom';
import Socials from './../Socials/Socials';

export default function Navbar() {
    return (
        <NavbarStyled>
            <Wrapper className="wrapper">
                <ul>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/">
                        <li>Experience</li>
                    </Link>
                    <Link to="/">
                        <li>Eduction</li>
                    </Link>
                    <Link to="/">
                        <li>Portfolio</li>
                    </Link>
                </ul>

                <div className="left">
                    <Socials />
                    <ModeToggle />
                </div>
            </Wrapper>
        </NavbarStyled>
    );
}