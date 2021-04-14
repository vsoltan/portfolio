
import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';


import '../../App.css';

const Styles = styled.div`
    .social-tab {
        padding-left: 0; 
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;
    }
    .social-item {
        padding-right: 15px;
    }
    .twitter {
        color: #49a1eb;
    }
    .github {
        color: #000000; 
    }
    .linkedin {
        color: #0a66c2
    }
`

const SocialTab = () => (
    <Styles>
        <div className="social-tab">
            <a href="https://github.com/vsoltan"
                className="social-item github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/valeriy-soltan/"
                className="social-item linkedin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/vsoltann"
                className="social-item twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
    </Styles>
); 

export default SocialTab; 