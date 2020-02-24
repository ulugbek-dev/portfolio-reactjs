import styled, { css } from 'styled-components';
import { darkBg, lightBg } from './../styled/variables';

export const Content = styled.div`
    width: 100%;
    min-height: 100%;
    height: 100%;
    ${props => props.dark ? css`
        background: ${darkBg};
    ` : css`
        background: ${lightBg};
    `}
    ${props => props.out ? css`
        animation: componentOut 800ms forwards cubic-bezier(0.44,-0.01, 0.3, 0.86);
    ` : css`
        animation: componentIn 800ms forwards cubic-bezier(0.44,-0.01, 0.3, 0.86);
    `}

    * {
        transition: 200ms;
    }
`