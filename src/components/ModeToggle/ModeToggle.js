import React,{ useState } from 'react';
import { ModeToggleStyled } from './styled';

export default function ModeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ModeToggleStyled>
            <input type="checkbox" id="day_night" onClick={() => setDarkMode(!darkMode)} checked={darkMode} />
            <label for="day_night" className="toggle">
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