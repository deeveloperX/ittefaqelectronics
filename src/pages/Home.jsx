import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '/assets/banner1.png';
import banner2 from '/assets/banner2.png';
import banner3 from '/assets/banner3.png';
import BrandMarquee from "../components/BrandMarquee";
import ImageGrid from '../components/ImageGrid';
import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { productsData } from '../data/products';
import { Link } from 'react-router-dom'; // add this at the top


// Optional: Adjust how many items to show
const featuredCount = 6;
// const trendingCount = 3;

const Home = () => {
  const featured = productsData.filter(product => product.featured);
  // const featured = productsData.slice(0, featuredCount);
  // const trending = productsData.slice(featuredCount, featuredCount + trendingCount);

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
          {featured.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4}>
              <ProductCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* <Container className="my-5">
        <h2 className="text-center mb-4">🔥 Trending Products</h2>
        <Row className="g-4">
          {trending.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4}>
              <ProductCard {...item} />
            </Col>
          ))}
        </Row>
      </Container> */}

      {/* <Footer /> */}

      <div className="text-center mt-4">
        <Link to="/products">
          <button className='explore-btn'>
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
