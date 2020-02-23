import styled, { css } from 'styled-components';

export const Header = styled.header`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    padding: 30px 0;
    ${props => props.dark ? css`background-color: #10141a;` : css`background-color: #f6f6f6;`}

    :before {
        content: '';
        position: absolute;
        width: 50px;
        height: 5000px;
        transform: rotate(24deg);
        left: -400px;
        top: -1000px;
        background: rgba(0,0,0,0.4);
    }
    :after {
        content: '';
        position: absolute;
        width: 50px;
        height: 5000px;
        transform: rotate(24deg);
        left: -500px;
        top: -1000px;
        background: rgba(0,0,0,0.4);
    }
`