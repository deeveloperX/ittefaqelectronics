// src/components/ProductCard.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, price }) => {
  return (
    <Card className="shadow-sm p-2">
      <Card.Img variant="top" src={image} style={{ height: '300px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Rs. {price.toLocaleString()}</Card.Text>
        <Link to={`/products/${id}`}>
          <Button variant="primary">View</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
