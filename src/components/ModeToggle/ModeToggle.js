import React, { useEffect } from 'react';
import { ModeToggleStyled } from './styled';
import { useDispatch, useSelector } from 'react-redux';

export default function ModeToggle() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const handleDarkMode = () => {
        dispatch({ type: 'DARK_MODE' });
    }
    useEffect(() => {
        localStorage.setItem('UA-portfolio', JSON.stringify(state.darkMode));
    }, [state]);
    
    return (
        <ModeToggleStyled>
            <input type="checkbox" id="day_night" onChange={handleDarkMode} checked={state.darkMode} />
            <label htmlFor="day_night" className="toggle">
                <span className="toggle_handler">
                    <span className="crater crater_1"></span>
                    <span className="crater crater_2"></span>
                    <span className="crater crater_3"></span>
                </span>
                <span className="star star_1"></span>
                <span className="star star_2"></span>
                <span className="star star_3"></span>
                <span className="star star_4"></span>
                <span className="star star_5"></span>
                <span className="star star_6"></span>
            </label>
        </ModeToggleStyled>
    );
}