
import React from "react";
import styled from "styled-components";

const ContactForm = () => (
    <Form className="contact-form" method="post" action="contact-handler-php">
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@domain.com" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="20" />
        </Form.Group>
        <Button variant="primary" type="submit" className="float-right">
            Submit
        </Button>
    </Form>
);

export default ContactForm;