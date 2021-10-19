import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Appointment = () => {
    const {appointmentId} = useParams();
    return (
        <Container>
            <h1>Appointment Form</h1>
            <p><big> Appointment requests can get unwieldy fast if you're relying on plain old email. That's why savvy businesses turn to Jotform's simple-to-edit online appointment forms to let their clients schedule meetings. Whether you're a big corporation or own your own business, our appointment form templates are customizable to meet your needs. Add widgets, apps or theme through the Jotform builder to encourage users to fill out your form. Get started with a brand new form or selected one of our appointment form samples.</big></p>
            <Row className="g-2 m-5">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Indicate date and time">
                    <Form.Control type="text" placeholder="Indicate date and time" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                    <Form.Select aria-label="Floating label select example">
                        <option>Open this select menu</option>
                        <option value="1">PRP</option>
                        <option value="2">Hair Transplant By</option>
                        <option value="3">Kidney Transplant</option>
                        <option value="4">COVID vaccination</option>
                        <option value="5">Appendiside Operation</option>
                        <option value="6">Ultrasonogram</option>
                        <option value="7">Thelasemia</option>
                    </Form.Select>
                    </FloatingLabel>
                </Col>
                <Button variant="outline-secondary">Submit and Confirm Appointment</Button>
                
            </Row>
        </Container>
    );
};

export default Appointment;