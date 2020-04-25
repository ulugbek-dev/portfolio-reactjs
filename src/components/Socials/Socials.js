import React from 'react';
import { SocialsStyled } from './styled';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
    return (
        <SocialsStyled>
            <a href="https://www.facebook.com/ulugbek.abdullaev1" target="_blank" rel="noopener noreferrer" className="facebook">
                <Icon icon={faFacebookF} />
            </a>    
            <a href="https://github.com/ulugbek-dev" target="_blank" rel="noopener noreferrer" className="github">
                <Icon icon={faGithub} />
            </a>  
            <a href="https://www.instagram.com/ulugbek.08/" target="_blank" rel="noopener noreferrer" className="instagram">
                <Icon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/ulugbek-abduloev-347169ba/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <Icon icon={faLinkedinIn} />
            </a>
        </SocialsStyled>
    );
}