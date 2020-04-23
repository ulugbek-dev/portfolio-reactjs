import styled from 'styled-components';
import { textDarkColor, textLightColor } from './../../elements/variables';

export const AppStyled = styled.div`
    color: ${textLightColor};
    height: 100%;


    .animate-enter,
    .animate-enter-active {
        animation: componentIn 800ms forwards;
    }
    .animate-exit,
    .animate-exit-active {
        animation: componentExit 900ms forwards;
    }

    @keyframes componentIn {
        0% {
            opacity: 0;
            transform: scale(.7);
        }
        15% {
            opacity: 0;
            transform: scale(.7);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes componentExit {
        0% {
            opacity: 1;
            z-index: 2;
            transform: scale(1) translateX(0%);
        }
        100% {
            opacity: 1;
            z-index: 2;
            transform: scale(1) translateX(-150%);
        }
    }
`