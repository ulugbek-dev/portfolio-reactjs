import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NavStyled } from './NavStyled';
import { useSelector, useDispatch } from 'react-redux';
import { useWidth } from '@ulugbek-dev/windowsize';
import Socials from '../../Socials/Socials';

export default function Nav() {
    const mobileNav = useSelector(state => state.mobileNav);
    const dispatch = useDispatch();
    const width = useWidth();

    const navItems = [
        {title: 'Home', url: '/'},
        {title: 'About', url: '/about'},
        {title: 'Experience & Eduction', url: '/experience-and-education'},
        {title: 'Portfolio', url: '/portfolio'},
        {title: 'Skills', url: '/skills'},
    ]

    const handleClose = () => {
        if(width <= 991)
            dispatch({ type: 'MOBILE_NAV' });
    }

    useEffect(() => {
        if(mobileNav && width > 991)
            dispatch({ type: 'MOBILE_NAV' })
    }, [width, mobileNav]);

    return (
        <NavStyled onClick={e => e.stopPropagation()} mobileNav={mobileNav} length={navItems}>
            <ul>
                {mobileNav && navItems.map((n, i) => (
                    <li key={i}>
                        <NavLink onClick={handleClose} exact to={n.url}>{n.title}</NavLink>
                    </li>
                ))}

                {width > 991 && navItems.map((n, i) => (
                    <li key={i}>
                        <NavLink onClick={handleClose} exact to={n.url}>{n.title}</NavLink>
                    </li>
                ))}
            </ul>
           
            {mobileNav && width < 512 && <Socials />}
        </NavStyled>
    );
}