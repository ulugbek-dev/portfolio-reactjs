import styled, { css } from 'styled-components';

export const Header = styled.header`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    ${props => props.dark ? css`background-color: #10141a;` : css`background-color: #f3f3f3;`}

    img {

    }
`