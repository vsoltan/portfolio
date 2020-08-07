
import React from 'react';
import styled from 'styled-components';
import prof from '../../assetts/images/about-page/prof.jpeg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../App.css';

const Styles = styled.div`
    .container {
        margin-top: 5%;
    }
    h1 {
        margin-bottom: 1.5rem;
    }
    p {
        padding-top: 10px;
    }
    .portrait {
        object-fit: cover;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        max-height: 425px;
        border-radius: 5px;
    }
    .img-container {
        display: flex;
    }
    #wrap-around {
        display: none;
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

const wrappedContent = "Actively looking for Summer 2021 opportunities: I have a breadth of experience working in dynamic environments across embedded and mobile platforms.";

const About = () => (
    <Styles>
        <div id="page-top">
            <Container className="container">
                <Row>
                    <Col className="col-sm">
                        <h1>Hey, I'm Valeriy, a Firmware Intern at <a className="link" href="https://openthings.io/" target="_blank" rel="noopener noreferrer">OpenThings.</a></h1>
                        <div className="about">
                            <p>Currently working towards a B.S in Computer Science and Statistics at the University of Massachusetts—Amherst.</p>
                            <p>Interested in deconstructing the way things work. Passionate about systems programming, computer architecture, and building
                                robust solutions to problems.</p>
                            <p id="wrap-display">{wrappedContent}</p>
                        </div>
                    </Col>
                    <Col className="col-sm col-images">
                        <div className="img-container">
                            <Image src={prof} className="portrait"/>
                        </div>
                        <p id="wrap-around">{wrappedContent}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </Styles>
);


export default About;

