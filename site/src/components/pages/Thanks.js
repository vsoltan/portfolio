
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .container {
        margin-top: 5%;
        margin-bottom: 5%;
    }
    #title {
        margin-bottom: 1.5rem;
    }
`;

const Acknowledgements = () => (
    <Styles>
        <Container>
            <h1 id="title">Thank You!</h1> 
            <p>
                I hope you enjoyed reading about some of the cool things I've been working on over the years! Please reach out regarding 
                my projects, future opportunities, or just to say hello. A special thank you to Evgeni Belin for his passion for learning, 
                mentorship, and lectures on all sorts of interesting things.
            </p>
        </Container>
    </Styles>
);

export default Acknowledgements;