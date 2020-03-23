import styled from 'styled-components';
import { primaryColor } from './../../styled/variables';

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
            margin-right: 20px;
            border: none;
            -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0);
            -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0);
            box-shadow: 0px 0px 15px 0px rgba(0,0,0,0);
            transform: scale(1);
            transition: 350ms ease-out;

            :hover {
                transform: scale(1.035);
                -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
                -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
                box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
            }
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