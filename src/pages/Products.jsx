// src/pages/Products.jsx
import React, { useState, useMemo } from 'react';
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  Collapse,
  ListGroup,
} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

const categories = [
  // 'Air Conditioners',
  // 'Refrigerators',
  'Air Coolers',
  // 'LED TVs',
  'Washing Machines',
  'Microwave Ovens',
  'Water Coolers',
  'Heaters',
  'Geysers',
  'Insect Killers',
  'Kitchen Accessories'
];

const Products = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState('Best Match');

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    if (searchQuery.trim()) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (minPrice !== '') {
      result = result.filter(p => p.price >= Number(minPrice));
    }
    if (maxPrice !== '') {
      result = result.filter(p => p.price <= Number(maxPrice));
    }

    switch (sortOption) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, minPrice, maxPrice, sortOption]);

  return (
    <div className="container my-4">
      {/* Search Bar */}
      <Row className="mb-4">
        <Col md={8}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Button variant="primary">🔍</Button>
          </InputGroup>
        </Col>
      </Row>

      {/* Shop by Categories - Dropdown for small screens */}
      <div className="d-md-none mb-3">
  <Button
    variant="outline-primary"
    onClick={() => setShowCategories(!showCategories)}
    aria-controls="categories-collapse"
    aria-expanded={showCategories}
  >
    📂 Shop by Categories
  </Button>
  <Collapse in={showCategories}>
    <div id="categories-collapse" className="mt-2">
      <ListGroup>
        {categories.map((cat, index) => (
          <ListGroup.Item
            key={index}
            active={cat === selectedCategory}
            onClick={() => {
              setSelectedCategory(cat);
              setShowCategories(false); // Close dropdown after selection
            }}
            style={{ cursor: 'pointer' }}
          >
            {cat}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  </Collapse>
</div>

      <Row>
        {/* Sidebar for desktop */}
        <Col md={3} className="d-none d-md-block">
          <h5 className='text-primary'>Shop by Categories</h5>
          <ListGroup>
            {categories.map((cat, index) => (
              <ListGroup.Item
                key={index}
                active={cat === selectedCategory}
                onClick={() => setSelectedCategory(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <Row className="mb-3 align-items-end">
            <Col md={6}>
              <Form.Group controlId="sortBy">
                <Form.Label>Sort By</Form.Label>
                <Form.Select
                  value={sortOption}
                  onChange={e => setSortOption(e.target.value)}
                >
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Label>Price Range</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                />
                <Form.Control
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                />
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                    setMinPrice('');
                    setMaxPrice('');
                    setSortOption('Best Match');
                  }}
                >
                  Clear
                </Button>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Col md={4} sm={6} className="mb-4" key={product.id}>
                  <ProductCard
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                </Col>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
