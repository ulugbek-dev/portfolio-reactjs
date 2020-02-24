import React from 'react';
import { Nav } from './../../styled/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    const darkMode = useSelector(state => state.darkMode)
    const history = useHistory();
    const dispatch = useDispatch();
 
    const nav = [
        'About me',
        'Education',
        'Experiences',
        'Skills',
        'Portfolio',
        'Contact me'
    ];

    const handleLink = (x) => {
        dispatch({
            type: 'COMPONENT_OUT'
        });
        setTimeout(() => {
            dispatch({
                type: 'COMPONENT_OUT'
            });
            return history.push(x.toLocaleLowerCase().split(' ').join('-'))
        }, 800)
    }

    return (
        <Nav dark={darkMode}>
            <div>
                <ul>
                    {nav.map(x => <li><p onClick={() => handleLink(x)}>{x}</p></li>)}
                </ul>
            </div>
        </Nav>
    )
}