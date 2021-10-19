import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service= (props) => {
    const {name, picture, about, doctor, specialist, key} = props.serve;
    return (
        <div>
            <Container>
              <>
                <Card className="mt-5">
                    <Card.Text>
                        <h4 className="mt-3">Treatment: {name}</h4>
                    </Card.Text>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                    <Card.Text>
                        <p><big>Description: </big>{about}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <h5>{name} By:{doctor}</h5>
                    <p>Specialist: {specialist}</p>
                     <p><big><Link to={`/appointment/${key}` }className="text-danger">Book Now</Link></big></p>
                    
                </Card>
              </>
            </Container>
        </div>
    );
};

export default Service;