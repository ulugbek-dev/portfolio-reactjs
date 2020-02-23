import React from 'react';
import logo from './../../img/logo.png';
import { Nav } from './../../styled/Nav';
import { Wrapper } from './../../styled/Wrapper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const darkMode = useSelector(state => state.darkMode)
    const nav = [
        'About me',
        'Education',
        'Experiences',
        'Skills',
        'Portfolio',
        'Contact me'
    ];

    return (
        <Nav dark={darkMode}>
            <div>
                <ul>
                    {nav.map(x => <li><Link to={x.toLocaleLowerCase().split(' ').join('-')}>{x}</Link></li>)}
                </ul>
            </div>
        </Nav>
    )
}