import styled from 'styled-components';

export const SocialsStyled = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    a {
        margin: 0 10px;
        transition: 250ms ease-out;
    }

    a.facebook: hover {
        color: #8b9dc3;
    }
    a.instagram: hover {
        color: #DC5D65;
    }
    a.github: hover {
        color: #aaa;
    }
    a.linkedin: hover {
        color: #0077B5;
    }
`