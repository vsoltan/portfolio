
import React from 'react';
import styled from 'styled-components';
import profPic from '../../assets/images/about-page/profPic.jpeg';
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
    // keep social media tab aligned with image 
    @media screen and (min-width: 992px) {
        #row-pos { position: relative; }
        #social-tab-pos { 
            position: absolute; 
            bottom: 0;
        }
    }
`;

const positionTitle = "incoming Software Intern";
const companyName = "Electronic Arts";
const companyURL = "https://www.ea.com/";

// const jobSearchYear = 2021; 
// const wrappedContent = `Actively looking for Summer ${jobSearchYear} opportunities: I have a 
//     breadth of experience working in dynamic environments across embedded and mobile platforms.`;

const wrappedContent = `Enjoy playing volelyball, cooking, and gaming.`

const Header = () => (
    <Styles>
        <div id="page-top">
            <Container className="container">
                <Row>
                    <Col className="col-sm" id="row-pos">
                        <div className="header">
                            <h1>Hey, I'm Valeriy, an {positionTitle} at <a className="link" href={companyURL} target="_blank" rel="noopener noreferrer">{companyName}.</a></h1>
                        </div>
                        <div className="about">
                            <p>Currently working towards a B.S in Computer Science and a minor in Mathematics at the University of Massachusetts—Amherst.</p>
                            <p>Interested in deconstructing the way things work. Passionate about systems programming, clever algorithms, and distributed systems.</p>
                            <p></p>
                            {/* <p id="wrap-display">{wrappedContent}</p> */}
                        </div>
                        <div className="social-tab" id="social-tab-pos">
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
                            <Image src={profPic} className="portrait" />
                        </div>
                        {/* <p id="wrap-around">{wrappedContent}</p> */}
                    </Col>
                </Row>
            </Container>
        </div>
    </Styles>
);


export default Header;

