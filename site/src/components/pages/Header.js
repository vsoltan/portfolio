
import React from 'react';
import styled from 'styled-components';
import prof from '../../assetts/images/about-page/prof.jpeg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import '../../App.css';

const Styles = styled.div`
    .container {
        margin-top: 5%;
    }
    p {
        margin-bottom: 1.2rem;
    }
    .portrait {
        object-fit: cover;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        max-height: 450px;
        border-radius: 5px;
    }
    .img-container {
        display: flex;
    }
    #wrap-around {
        display: none;
    }
    .header {
        margin-bottom: 1.2rem;
    }
    .social-tab {
        padding-left: 0; 
        margin-top: 1.2rem;
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
    @media screen and (min-width: 0px) and (max-width: 767px) {
        #wrap-display { display: block; }
        .col-images { display: none; }  /* hide images on small screens */
        
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #wrap-display { display: none; }
        #wrap-around { 
            display: block;
            padding-top: 1.5em; 
        }
    }
`;

const positionTitle = "Firmware Intern";
const companyName = "OpenThings";
const companyURL = "https://openthings.io/";

const wrappedContent = "Actively looking for Summer 2021 opportunities: I have a breadth of experience working in dynamic environments across embedded and mobile platforms.";

const Header = () => (
    <Styles>
        <div id="page-top">
            <Container className="container">
                <Row>
                    <Col className="col-sm">
                        <div className="header">
                            <h1>Hey, I'm Valeriy, a {positionTitle} at <a className="link" href={companyURL} target="_blank" rel="noopener noreferrer">{companyName}.</a></h1>
                        </div>
                        <div className="about">
                            <p>Currently working towards a B.S in Computer Science and Statistics at the University of Massachusetts—Amherst.</p>
                            <p>Interested in deconstructing the way things work. Passionate about systems programming, computer architecture, and building
                                robust solutions to problems.</p>
                            <p id="wrap-display">{wrappedContent}</p>
                        </div>
                        <div className="social-tab">
                            <a href="https://github.com/vsoltan"
                                className="social-item github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/valeriy-soltan/"
                                className="social-item linkedin" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a href="https://twitter.com/vsoltann"
                                className="social-item twitter" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </Col>
                    <Col className="col-sm col-images">
                        <div className="img-container">
                            <Image src={prof} className="portrait" />
                        </div>
                        <p id="wrap-around">{wrappedContent}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </Styles>
);


export default Header;

