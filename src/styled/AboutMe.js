import styled from 'styled-components';
import { primaryColor } from './variables';

export const AboutMe = styled.section`
    display: flex;
    align-items: center;

    .img {
        flex: 1;
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            border-radius: 50%;
            max-width: 300px;
            padding-right: 20px;
        }
    }
    .text {
        flex: 1.2;

        p {
            max-width: 700px;
            font-size: 18px;
            line-height: 1.4;
        }
        b {
            font-size: 30px;
            
            span {
                color: ${primaryColor};
                margin-left: 4px;
            }
        }
    }
`