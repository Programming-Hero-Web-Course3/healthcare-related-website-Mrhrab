import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        
        <>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/NyPqjHK/Screenshot-2021-10-18-210024.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Find out heart disease</h3>
      <p>the leading cause of death in the United States</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-90"
      src="https://i.ibb.co/Hxht33r/Screenshot-2021-10-18-204737.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Emergency Service</h3>
      <p>DSC+ provides local, comprehensive hospital bed repair services, including inspection and preventive maintenance, to OEM standards.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/rZ3C8w9/Screenshot-2021-10-18-210825.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Covid Vaccination</h3>
      <p>We provide covid vaccination for free of cost throughout the country</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
        
    );
       
        
};

export default Banner;