import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import storeImage from '../assets/masonry/Masonry4.jpeg'; // Replace with your actual image

function About() {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="fw-bold">About Ittefaq Electronics</h1>
          <p className="text-muted fs-5">
            Trusted Electronics Store in Sialkot Since 1998
          </p>
        </Col>
      </Row>

      {/* Image and Overview */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src={storeImage}
            alt="Ittefaq Electronics Storefront"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h3 className="fw-semibold mb-3">Our Story</h3>
          <p className="text-muted">
            Founded in 1998, <strong>Ittefaq Electronics</strong> has grown to become one of the most reliable and customer-trusted electronics stores in Sialkot, Pakistan. We have served thousands of happy customers with top-quality home appliances and electronics.
          </p>
          <p className="text-muted">
            From air conditioners to refrigerators, washing machines, and kitchen appliances, we deal in only genuine and brand-authorized products with excellent after-sales support. Our commitment is to provide our customers with the latest and most efficient technology at the best prices.
          </p>
        </Col>
      </Row>

      {/* Why Choose Us */}
      <Row className="mb-5">
        <Col>
          <h3 className="fw-semibold mb-4 text-center">Why Choose Us?</h3>
          <ul className="list-unstyled fs-5 text-muted">
            <li className="mb-2">
              <FaCheckCircle className="text-success me-2" /> 25+ Years of Experience
            </li>
            <li className="mb-2">
              <FaCheckCircle className="text-success me-2" /> Trusted by Thousands in Sialkot
            </li>
            <li className="mb-2">
              <FaCheckCircle className="text-success me-2" /> Authorized Dealer of Top Brands
            </li>
            <li className="mb-2">
              <FaCheckCircle className="text-success me-2" /> Genuine Products & Warranty Support
            </li>
            <li className="mb-2">
              <FaCheckCircle className="text-success me-2" /> Excellent Customer Service
            </li>
          </ul>
        </Col>
      </Row>

      {/* Location & Social */}
      <Row className="text-center">
        <Col md={6} className="mb-4">
          <h5 className="fw-semibold mb-3">Visit Our Store</h5>
          <Button
            variant="outline-primary"
            href="https://maps.app.goo.gl/c8prChz9Vwets2FE7?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="me-2" /> Find Us on Google Maps
          </Button>
        </Col>
        <Col md={6}>
          <h5 className="fw-semibold mb-3">Follow Us on Instagram</h5>
          <Button
            variant="outline-danger"
            href="https://www.instagram.com/ittefaqelectronicssialkot?igsh=bmxpZmI0dGppZzVs&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="me-2" /> @ittefaqelectronicssialkot
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
