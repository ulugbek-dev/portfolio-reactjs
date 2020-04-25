import styled from 'styled-components';
import { darkBg, lightBg, textLight, textDark } from './../../elements/variables';

export const SkillsStyled = styled.section`
    background: ${props => props.darkMode ? darkBg : lightBg};
    min-height: ${props => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        padding-top: 100px;
    }

    .slick-slider {
        width: 90%;
        margin-top: 120px;
    }

    .slick-prev::before {
        content: '\\2039';
        font-size: 24px;
        color: ${props => props.darkMode ? textLight : textDark}
    }
    .slick-next::before {
        content: '\\203A';
        font-size: 24px;
        color: ${props => props.darkMode ? textLight : textDark}
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slick-slide {
        opacity: 0;
        transform: scale(.5);
        animation: fadeIn 400ms forwards 500ms;
    }

    img {
        width: 100px;
        filter: grayscale(60%);
        margin: auto;
    }
    
    p {
        text-align: center;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`