import styled from 'styled-components';
import { primaryColor, darkBg, lightBg } from '../../elements/variables';

export const AboutStyled = styled.div`
    position: absolute;
    background: ${props => props.darkMode ? darkBg : lightBg};
    height: ${props => props.height}px;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .wrapper {
        display: flex;
        justify-content: center;

        .animation {
            flex: 1;
            display: flex;
            justify-content: center;

            svg {
                width: 100%;
                padding-left: 30px;
                max-width: 500px;
            }
        }

        .content {
            flex: 1;
            padding: 30px;

            .hello {
                font-size: 32px;
                font-family: 'Helvetica Neue', sans-serif;
                font-weight: 700;
                margin-bottom: 8px;

                span {
                    font-size: 32px;
                    color: ${primaryColor};
                    animation: blink 2000ms infinite;
                }
            }

            span {
                font-size: 20px;
                line-height: 1.4;
                max-width: 600px;
            }
        }
    }

    @keyframes blink {
        from {
            opacity: 0;
        }
        30%, 70% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`