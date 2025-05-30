import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import BrandMarquee from "../components/BrandMarquee";
import ImageGrid from '../components/ImageGrid';
import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// Data
const featured = [
    { id: 1, image: '/src/assets/products/water-cooler.jpeg', name: 'Water Cooler', price: 42499 },
    { id: 2, image: '/src/assets/products/AirCooler-GF6700-Supreme1.jpeg', name: 'GF-6700 Supreme', price: 28500 },
    { id: 3, image: '/src/assets/products/Kitchen-4in1-deal.webp', name: 'Kitchen deal 4 in 1', price: 250000 },
  ];
  
  const trending = [
    { image: '/src/assets/products/Kitchen-hood-generaltec-2.webp', name: 'Kitchen hood', price: 25800 },
    { image: '/src/assets/products/AirCooler-PK5500-3.jpeg', name: 'AirCooler PK-5500', price: 34500 },
    { image: '/src/assets/products/AirCooler-PakFan-PK4750-1.jpeg', name: 'AirCooler PK-4750', price: 29000 },
  ];


const Home = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel fade className='mb-5'>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <BrandMarquee />

      <ImageGrid />

      <Container className="my-5">
        <h2 className="text-center mb-4">🌟 Featured Products</h2>
        <Row className="g-4">
          {featured.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <ProductCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">🔥 Trending Products</h2>
        <Row className="g-4">
          {trending.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <ProductCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
