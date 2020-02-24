import styled, { css } from 'styled-components';
import { primaryColor } from './variables';

const name = 'Ulugbek Abduloev ';
const nameArr = name.split('');
let count = 1600;

export const MyName = styled.h1`
    text-transform: uppercase;
    cursor: default;
    margin: 0;
    align-self: center;
    font-size: 44px;
    margin-bottom: 20px;

    span {
        transform: scale(1);
        display: inline-block;
        transition: 200ms;

        :hover {
            color: ${primaryColor};
            transform: scale(1.3);
        }
        ${nameArr.map((x, i) => (
            css`:nth-child(${i}) {
                animation: bounce 200ms ${count += 50}ms;
            }`
        ))}
    }
    .space{
        width: 14px;
    }
`