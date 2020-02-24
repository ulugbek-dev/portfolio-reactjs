import styled, { css } from 'styled-components';
import { maxWidth } from './variables';

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    height: 100%;
    max-width: ${maxWidth};
    padding: 0 30px;
    ${props => props.column && css`flex-direction: column;`}
    ${props => props.justifyCenter && css`justify-content: center;`}
    ${props => props.alignCenter && css`align-items: center;`}
    ${props => props.block ? css`display: block;` : css`display: flex;`}
`