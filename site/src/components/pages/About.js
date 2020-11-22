
import React from "react"; 
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .container {
        margin-top: 5%; 
    }
    #title {
        margin-bottom: 1.5rem;
    }
`;

const AboutMe = () => (
    <Styles>
        <div id="page-about">
            <Container> 
                <h1 id="title">About Me.</h1>
            </Container>
        </div>
    </Styles>
);

export default AboutMe;  