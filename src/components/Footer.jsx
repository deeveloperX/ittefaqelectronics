import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/assets/apple-touch-icon.png';


const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          {/* Brand & About */}
          <Col md={4}>
          <img
                        src={logo}
                        alt="Ittefaq Electronics Logo"
                        height="40"
                        className="d-inline-block align-text-top me-2"
                      />
            <h5 className="fw-bold mb-3">Ittefaq Electronics</h5>
            <p>
              We bring you the best electronics at affordable prices. Explore
              air conditioners, refrigerators, home appliances, and more.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Contact Us</h5>
            {/* <p>
              📱 WhatsApp:{" "}
              <a
                href="https://wa.me/3216126870?text=Hello%2C%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                +92 321 6126870
              </a>
            </p> */}
            <p>📞 <a href="tel:+923216126870" className="text-light text-decoration-none">+92 321 6126870</a></p>
            <p>📞 Landline: <a href="tel:0524596811" className="text-light text-decoration-none">052 4596811</a></p>
            <p>📍 Sialkot, Pakistan</p>
            <p>✉️ <a href="mailto:faizanjum79@gmail.com" className="text-light text-decoration-none">Faizanjum79@gmail.com</a></p>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center mb-0 small">
          © {new Date().getFullYear()} Ittefaq Electronics, Sialkot. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
