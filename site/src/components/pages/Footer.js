
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../../App.css';

const Styles = styled.div`
    p {
        font-family: Metropolis-Thin;
    }
`;

const Footer = () => (
    <Styles>
        <Container>
            <p>Made with React, Bootstrap, and CSS.</p>
            <p>A special thank you to Evgeni Belin for his passion for learning, mentorship, and lectures on all sorts of interesting things.</p>
        </Container>
    </Styles>
)

export default Footer;