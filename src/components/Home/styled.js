import styled, { css } from 'styled-components';
import { darkBg, lightBg, primaryColor } from './../../styled/variables';

export const HomeStyled = styled.header`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    padding: 30px 0;
    padding-top: 50px;

    ${props => props.dark ? css`
        background-color: ${darkBg};
    ` : css`
        background-color: ${lightBg};
    `}

    :before {
        content: '';
        position: absolute;
        width: 50px;
        height: 5000px;
        transform: rotate(24deg);
        left: -400px;
        top: -1000px;
        ${props => props.dark ? css`background-color: rgba(0,0,0,0.4);` : css`background-color: rgba(0,0,0,0.2);`}
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        animation: lines 2.5s forwards;
    }
    :after {
        content: '';
        position: absolute;
        width: 50px;
        height: 5000px;
        transform: rotate(24deg);
        left: -500px;
        top: -1000px;
        ${props => props.dark ? css`background-color: rgba(0,0,0,0.4);` : css`background-color: rgba(0,0,0,0.2);`}
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        animation: lines 2s forwards;
    }

    a {
        margin-top: 20px;
        color: #fff;
        background: ${primaryColor};
        min-width: 144px;
        display: flex;
        justify-content: center;
        padding: 12px;
        padding-right: 50px;
        border-radius: 4px;
        text-decoration: none;
        position: relative;
        border: none;
        cursor: pointer;
        transition: 200ms;
        :hover > .arrow {
            animation: arrow 1000ms infinite;
        }

        .arrow {
            width: 20px;
            height: 2px;
            background: #fff;
            position: absolute;
            top: 50%;
            right: 18px;
            opacity: .7;
            transition: 200ms;
            :before,
            :after {
                content: '';
                position: absolute;
                width: 8px;
                height: 2px;
                background: #fff;
                right: 0;
                top: -100%;
                transform: rotate(45deg);
            }
            :after {
                top: 100%;
                transform: rotate(-45deg);
            }
        }
    }

    @keyframes lines {
        to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
    }
    @keyframes arrow {
        0% {
            opacity: 1;
            transform: translateX(0%);
        }
        30% {
            opacity: 1;
            transform: translateX(-40%);
        }
        70% {
            opacity: 1;
            transform: translateX(15%);
        }
        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }
`