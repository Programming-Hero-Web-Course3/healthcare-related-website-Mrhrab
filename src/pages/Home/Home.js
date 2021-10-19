import React from 'react';
import { Card, CardGroup, Carousel, Container } from 'react-bootstrap';

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

            <Container>
                 <h1 className="mt-5">Our experts works at top hospitals around the world </h1>
                 <hr />
                <Card className="bg-dark text-white m-5">
                    <Card.Img src="https://i.ibb.co/CW57WY4/7.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>University College Hospitals London</Card.Title>
                        <Card.Text>
                        London, UK
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white m-5">
                    <Card.Img src="https://i.ibb.co/WG7Ppr4/2.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Advocate Sherman Hospital</Card.Title>
                        <Card.Text>
                        Chicago, USA

                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white m-5">
                    <Card.Img src="https://i.ibb.co/ctQWRJj/3.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Oxford University Hospitals</Card.Title>
                        <Card.Text>
                        Oxford, UK
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                </Card>


                   <h1>Customer reviews</h1>
                   <hr />

                <Carousel>

                    

                   
                     <Carousel.Item>
                        <h4>Andrew Smith</h4>
                        <p>The most important place to leave a negative review, however, is on the social media page where the hospital or doctor has the biggest presence. I really appreciate all the doctors and nursing staff for their commitment. I am very thankful to this hospital and Dr P.C.Reddy for curing my father's health problem with his skillful treatment..The provider or hospital's Google page. I am very thankful to this hospital and Dr P.C.Reddy for curing my father's health problem with his skillful treatment.</p>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>Justin Biber</h4>
                       <p> however, is on the social media page where the hospital or doctor has the biggest presence. I really appreciate all the doctors and nursing staff for their commitment.The provider or hospital's Google page. I really appreciate all the doctors and nursing staff for their commitment. I am very thankful to this hospital and Dr P.C.Reddy for curing my father's health problem with his skillful treatment.</p>

                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>Selina Gomez</h4>
                        <p>The provider or hospital's Google page.thankful to this hospital and Dr P.C.Reddy for curing my father's health problem with his skillful treatment. I really appreciate all the doctors and nursing staff for their commitment. I am very thankful to this hospital and Dr P.C.I really appreciate all the doctors and nursing staff for their commitment. I am very thankful to this hospital and Dr P.C.Reddy for curing my father's health problem with his skillful treatment.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>Selina Gomez</h4>
                        <p>To have the biggest impact, it’s best to leave your negative review on several different sites. The most important place to leave a negative review, however, is on the social media page where the hospital or doctor has the biggest presence. This offers you access to a wider audience, and ensures the provider will see the review. For most providers and hospitals, this is going to mean leaving a review on Facebook. If the hospital has not enabled Facebook’s review tool, you can leave your negative review as a post to the page, or as a comment to a post on the page.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>Selina Gomez</h4>
                        <p>To have the biggest impact, it’s best to leave your negative review on several different sites. The most important place to leave a negative review, however, is on the social media page where the hospital or doctor has the biggest presence. This offers you access to a wider audience, and ensures the provider will see the review. For most providers and hospitals, this is going to mean leaving a review on Facebook. If the hospital has not enabled Facebook’s review tool, you can leave your negative review as a post to the page, or as a comment to a post on the page.</p>
                    </Carousel.Item>
                    
           </Carousel>
            

            </Container>
            
        

           
        </div>
    );
};

export default Home;