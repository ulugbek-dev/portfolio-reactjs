import styled, { css } from 'styled-components';
import { maxWidth } from './variables';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    height: 100%;
    max-width: ${maxWidth};
    padding: 0 30px;
    ${props => props.justifyCenter && css`justify-content: center;`}
    ${props => props.alignCenter && css`align-items: center;`}
`