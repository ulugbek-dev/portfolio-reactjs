import styled from 'styled-components';
import { textDark, textLight } from '../../../elements/variables';

export const HamburgerStyled = styled.div`
    .hamburger {
        width: 30px;
        height: 21px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;

        span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: ${props => props.darkMode ? textLight : textDark};
            border-radius: 5px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
        }

        span:nth-child(1) {
            top: 0px;
        }

        span:nth-child(2) {
            top: 9px;
        }

        span:nth-child(3) {
            top: 18px;
        }
    }
    
    .hamburger.open span:nth-child(1) {
        top: 9px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }

    .hamburger.open span:nth-child(2) {
        opacity: 0;
        left: -60px;
    }

    .hamburger.open span:nth-child(3) {
        top: 9px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }
`