
import React from 'react';
import styled from 'styled-components';
import prof from '../../assetts/images/prof.jpeg';
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
        font-family: Metropolis-Regular;
        font-size: 17px;
        padding-top: 10px;
    }
    b {
        font-family: Metropolis-Bold;
        font-size: 25px;
    }
    a { 
        color: var(--highlight-color); 
        text-decoration: none;
        position: relative;
    }
    a.link:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--highlight-color);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }

    a.link:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
    a.contact {
        background-color: var(--highlight-color);
        font-family: Metropolis-Bold;
        color: white;
        border-radius: 10px;
        padding: 10px 25px 10px 25px;
        text-align: center;
    }
    .portrait {
        object-fit: cover;
        width: 80%;
        height: 100%;
        max-height: 425px;
        border-radius: 5px;
    }
    .img-container {
        display: flex;
        justify-content: right;
    }
    #wrap-around {
        display: none;
    }
    @media screen and (min-width: 0px) and (max-width: 500px) {
        .col-images { display: none; }  /* hide images on small screens */
    }
    @media screen and (min-width: 501px) and (max-width: 767px) {
        #wrap-display { display: none; }
        #wrap-around { 
            display: block;
            padding-top: 1.5em; 
        }
        img {
            width: 100%;
        }
    }
`;

const wrappedContent = "Actively looking for Summer 2021 opportunities. I have a breadth of experience working in dynamic environments across embedded and mobile platforms.";

const About = () => (
    <Styles>
        <div id="page-top">
            <Container className="container">
                <Row>
                    <Col className="col-sm">
                        <h1>Hey, I'm Valeriy Soltan, a Firmware Intern at <a className="link" href="https://openthings.io/" target="_blank">OpenThings.</a></h1>
                        <div className="about">
                            <p>Currently working towards a B.S in Computer Science and Statistics at the University of Massachusetts—Amherst.</p>
                            <p>Interested in the <b>how</b> behind why things work. Passionate about systems programming, computer architecture, and building
                                accessible software for <b>everyone</b>.</p>
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

