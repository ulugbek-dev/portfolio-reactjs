import styled from 'styled-components';
import { maxWidth } from '../../elements/variables';

export const NavbarStyled = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    z-index: 99;

    .wrapper {
        display: inherit;
        justify-content: space-between;
        align-items: center;
    }

    .left {
        display: flex; 
        align-items: center;
    }

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        
        li {
            margin-right: 40px;
            opacity: .8;
            font-size: 16px;
            transition: 250ms ease-out;
            :hover {
                opacity: 1;
            }
        }
        li.active {
            border-bottom: 1px solid #fff;
        }
    }
`