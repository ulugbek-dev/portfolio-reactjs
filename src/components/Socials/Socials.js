import React from 'react';
import { SocialsStyled } from './styled';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
    return (
        <SocialsStyled>
            <a href="" target="_blank" className="facebook">
                <Icon icon={faFacebookF} />
            </a>    
            <a href="" target="_blank" className="github">
                <Icon icon={faGithub} />
            </a>  
            <a href="" target="_blank" className="instagram">
                <Icon icon={faInstagram} />
            </a>
            <a href="" target="_blank" className="linkedin">
                <Icon icon={faLinkedinIn} />
            </a>
        </SocialsStyled>
    );
}