// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { productsData } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <Container className="mt-4"><p>Product not found.</p></Container>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid style={{ maxHeight: '500px', objectFit: 'contain' }} />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h4 className="text-success">Rs. {product.price.toLocaleString()}</h4>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <Button
            variant="success"
            href={`https://wa.me/923216126870?text=Hello%20Ittefaq%20Electronics%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
            target="_blank"
          >
            Order on WhatsApp
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
