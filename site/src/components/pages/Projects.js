
import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import me from '../../assetts/images/me.jpg';
import styled from 'styled-components';
import '../../App.css';

const Styles = styled.div`
    .container {
        margin-top: 5%;
    }
`;

const Featured = () => (
    <Styles>
        <Container>
            <h1>My Work.</h1> 
            <Card style={{ width: '18rem' }} class="rounded-20">
                <Card.Img variant="top" src={me} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    </Styles>
);

export default Featured;