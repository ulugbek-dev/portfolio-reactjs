import React from 'react';
import { DarkModeStyled } from './styled';
import { useDispatch, useSelector } from 'react-redux';

export default function DarkMode() {
    const darkMode = useSelector(state => state.darkMode);
    const dispatch = useDispatch();

    return (
        <>
            <DarkModeStyled 
                dark={darkMode}
                onClick={() => {
                    dispatch({
                        type: 'DARK_MODE'
                    });
                }}
            >
                <i className={darkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'}></i>
            </DarkModeStyled>
        </>
    )
}