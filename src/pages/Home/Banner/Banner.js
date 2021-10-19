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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-90"
      src="https://i.ibb.co/Hxht33r/Screenshot-2021-10-18-204737.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/rZ3C8w9/Screenshot-2021-10-18-210825.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
        
    );
       
        
};

export default Banner;