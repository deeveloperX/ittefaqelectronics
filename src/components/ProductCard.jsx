// src/components/ProductCard.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ image, name, price }) => {
  return (
    <Card className="shadow-sm p-2">
      <Card.Img variant="top" src={image} style={{ height: '300px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Rs. {price.toLocaleString()}</Card.Text>
        <Button variant="primary" href="https://wa.me/923216126870?text=Hello%20Ittefaq%20Electronics%20Sialkot%2C%20I%20have%20a%20query." target="_blank">
          Order on WhatsApp
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
