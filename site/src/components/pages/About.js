
import React from 'react';
import styled from 'styled-components';
import me from '../../assetts/images/me.jpg';
import dog from '../../assetts/images/aubri.jpg';
import school from '../../assetts/images/umass.jpg';
import vball from '../../assetts/images/volleyball.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../App.css';

const Styles = styled.div`
    .upper-container {
        margin-top: 5%;
    }
    .lower-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2%;
        margin-bottom: 2%;
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
        font-size: 20px;
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

const About = () => (
    <Styles>
        <div id="page-top">
            <Container className="upper-container">
                <Row>
                    <Col className="col-sm">
                        <h1>Hey, I'm Valeriy Soltan, a Firmware Intern at <a className="link" href="https://openthings.io/" target="_blank">OpenThings.</a></h1>
                        <div className="about">
                            <p>Currently working towards a B.S in Computer Science and Statistics at the University of Massachusetts—Amherst.</p>
                            <p>Interested in the <b>how</b> behind why things work. Passionate about systems programming, numerical optimization, and building
                                accessible software for <b>everyone</b>.</p>
                            <p id="wrap-display">Actively looking for Summer 2021 opportunities. I have a breadth of experience working in dynamic environments across embedded and mobile platforms.</p>
                        </div>
                    </Col>
                    <Col className="col-sm col-images">
                        <div className="img-container">
                            <Image src={me} className="portrait"/>
                        </div>
                        <p id="wrap-around">Actively looking for Summer 2021 opportunities. I have a breadth of experience working in dynamic environments across embedded and mobile platforms.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="lower-container">
                <a className="contact" href="mailto:vsoltan@umass.edu">Reach Out</a>
            </Container>
        </div>
    </Styles>
);


export default About;

