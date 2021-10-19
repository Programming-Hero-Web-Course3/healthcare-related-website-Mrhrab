import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

import Banner from './Banner/Banner';




const Home = (props) => {
    
    
    return (
        <div id="home" >
            <Banner></Banner>
            <Container>
                <h1 className="mt-5">World Famous Doctors</h1>
                <CardGroup className="mt-5"> 
                    <Card className="mx-1">
                        <Card.Img variant="top" src="https://i.ibb.co/mHCr3PH/doctor-4.png" />
                        <Card.Body>
                        <Card.Title>Dr. Semina A. </Card.Title>
                        <Card.Text>
                            Dr. semina is an Associate Professor of Orthopedics and of The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center
                        </Card.Text>
                        </Card.Body>
                       
                    </Card>
                    <Card className="mx-1">
                        <Card.Img variant="top" src="https://i.ibb.co/ZVvzX8G/doctor-3.png" />
                        <Card.Body>
                        <Card.Title>Dr. Myles. B.</Card.Title>
                        <Card.Text>
                            Dr. Myles is also one of the best-known doctors of Pediatricians in the world. He graduated from the University of Miami Leonard M Miller School of Medicine in 1972
                        </Card.Text>
                        </Card.Body>
                       
                    </Card>
                    <Card  className="mx-1">
                        <Card.Img variant="top" src="https://i.ibb.co/QvPk35F/doctor-2.png" />
                        <Card.Body>
                        <Card.Title> Dr. Corrie T.M </Card.Title>
                        <Card.Text>
                            Dr. Anderson is also one of the best doctors in Pediatric Anesthesiologist around the world. He received his A.B. with Honors in Biochemistry from Harvard University 
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    </CardGroup>
            </Container>
            
        

           
        </div>
    );
};

export default Home;