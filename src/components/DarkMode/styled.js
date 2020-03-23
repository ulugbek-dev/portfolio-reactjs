import styled, { css } from 'styled-components';

export const DarkModeStyled = styled.div`
    padding: 8px;
    position: fixed;
    right: -80px;
    top: -65px;
    z-index: 9;
    width: 150px;
    height: 100px;
    transform: rotate(45deg);
    cursor: pointer;
    transition: 100ms ease-out;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.42);
    ${props => props.dark ? (
        css`background: linear-gradient(90deg, rgba(211,218,86,1) 0%, rgba(251,255,206,1) 100%);`
    ) : (
        css`background: linear-gradient(90deg, rgba(23,29,37,1) 0%, rgba(25,79,153,1) 100%);`
    )}

    :hover {
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.6);
    }

    i {
        ${props => props.dark ? (
            css`color: #131313;`
        ) : (
            css`color: #f3f3f3;`
        )}
        position: absolute;
        top: 77.5px;
        right: 58px;
        font-size: 17px;
        transform: rotate(-45deg);
        transition: 100ms ease-out;
    }
`