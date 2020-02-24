import styled, { css } from 'styled-components';
import { darkBg, lightBg } from './../styled/variables';

export const Header = styled.header`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    padding: 30px 0;
    ${props => props.dark ? css`background-color: ${darkBg};` : css`background-color: ${lightBg};`}
    ${props => props.out ? css`
        animation: componentOut 800ms forwards cubic-bezier(0.44,-0.01, 0.3, 0.86);
    ` : css`
        animation: componentIn 800ms forwards cubic-bezier(0.44,-0.01, 0.3, 0.86);
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
`