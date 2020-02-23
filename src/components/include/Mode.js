import React from 'react';
import { DarkMode } from './../../styled/DarkMode';
import { useDispatch, useSelector } from 'react-redux';

export default function Mode() {
    const darkMode = useSelector(state => state.darkMode);
    const dispatch = useDispatch();

    return (
        <>
            <DarkMode 
                dark={darkMode ? true : false}
                onClick={() => dispatch({
                    type: 'DARK_MODE'
                })}
            >
                <i className={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'}></i>
            </DarkMode>
        </>
    )
}