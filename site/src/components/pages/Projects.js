
import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import school from '../../assetts/images/umass.jpg';
import me from '../../assetts/images/me.jpg';
import styled from 'styled-components';

const Styles = styled.div`

`;

const Featured = () => (
    <Container>
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
);

export default Featured;