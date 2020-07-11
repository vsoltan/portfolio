
import React from 'react';
import styled from 'styled-components';
import me from '../../assetts/images/me.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`
    .container {
        margin-top: 3%;
    }
    h1 {
        font-family: Metropolis-Bold;
    }
    p {
        margin-top: 2%;
        font-family: Metropolis-Regular;
        font-size: 17px;
    }
    .title {
        width: 5
    }
    .about-image {
        width: 100%;
        height: auto;
        border-radius: 30px;
    }
`;

const About = () => (
    <Styles>
        <Container>
            <Row>
                <Col>
                    <h1>Hey, I'm Valeriy Soltan, a Firmware Intern at OpenThings.</h1>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Currently working towards a B.S in Computer Science and Statistics at the University of Massachusetts—Amherst.</p>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    </Styles>
);

export default About;

