import styled from 'styled-components';
import { primaryColor, darkBg } from '../../elements/variables';

export const AboutStyled = styled.div`
    position: absolute;
    background: ${darkBg};
    height: ${props => props.height}px;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .wrapper {
        display: flex;
        align-items: center;
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
            padding: 0 30px;

            .hello {
                font-size: 32px;
                font-family: 'Helvetica Neue', sans-serif;
                font-weight: 700;
                margin-bottom: 4px;

                span {
                    color: ${primaryColor};
                    animation: blink 2000ms infinite;
                }
            }

            p {
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