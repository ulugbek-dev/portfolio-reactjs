import styled, { css } from 'styled-components';
import { maxWidth } from './variables';

export const Nav = styled.nav`
    position: fixed;
    z-index: 8;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    
    div {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: ${maxWidth};
        margin: auto;
        padding: 0 30px;
    }

    ul {
        display: flex;
        list-style: none;
        padding: 0;

        li {
            margin: 0 3vw;
            font-size: 14px;

            p {
                color: inherit;
                text-decoration: none;
                border: 1px solid transparent;
                padding: 4px 0;
                transition: 200ms;
                cursor: pointer;

                :hover {
                    border-bottom: 1px solid #232323;
                    ${props => !props.dark ? css`
                        border-bottom: 1px solid #232323;
                    ` : css`
                        border-bottom: 1px solid #f3f3f3;
                    `}
                }
            }
        }
    }
`