import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const Home = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
