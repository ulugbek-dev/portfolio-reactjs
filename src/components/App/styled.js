import styled from 'styled-components';
import { textDarkColor, textLightColor } from './../../elements/variables';

export const AppStyled = styled.div`
    color: ${textLightColor};
    height: 100%;


    .animate-enter,
    .animate-enter-active {
        animation: componentIn 1500ms forwards;
    }
    .animate-exit,
    .animate-exit-active {
        animation: componentExit 750ms forwards;
    }

    @keyframes componentIn {
        0% {
            opacity: 0;
            transform: scale(.7) translateX(150%);
        }
        40% {
            opacity: 0;
            transform: scale(.7) translateX(150%);
        }
        75% {
            opacity: 1;
            transform: scale(.7) translateX(0%);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateX(0%);
        }
    }

    @keyframes componentExit {
        0% {
            opacity: 1;
            transform: scale(1) translateX(0%);
        }
        40% {
            opacity: 1;
            transform: scale(.7) translateX(0%);
        }
        100% {
            opacity: 1;
            transform: scale(.7) translateX(-150%);
        }
    }
`