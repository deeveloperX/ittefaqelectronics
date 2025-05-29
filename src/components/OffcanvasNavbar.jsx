import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/apple-touch-icon.png'; // if you want to import the logo

function OffcanvasNavbar() {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm mb-3">
      <Container fluid>
        {/* Logo and brand */}
        <Navbar.Brand className="d-flex align-items-center">
          <NavLink
            to="/"
            className="navbar-brand fw-bold d-flex align-items-center text-decoration-none text-dark"
          >
            <img
              src={logo}
              alt="Ittefaq Electronics Logo"
              height="40"
              className="d-inline-block align-text-top me-2"
            />
            Ittefaq Electronics
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Ittefaq Electronics
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Nav Links */}
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>

              <NavDropdown title="Products" id="products-dropdown">
                <NavDropdown.Item
                  as={NavLink}
                  to="/products/airconditioners"
                  className={({ isActive }) =>
                    isActive ? 'dropdown-item active' : 'dropdown-item'
                  }
                >
                  Air Conditioners
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/products/refrigerators"
                  className={({ isActive }) =>
                    isActive ? 'dropdown-item active' : 'dropdown-item'
                  }
                >
                  Refrigerators
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/products/aircoolers"
                  className={({ isActive }) =>
                    isActive ? 'dropdown-item active' : 'dropdown-item'
                  }
                >
                  Air Coolers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={NavLink}
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? 'dropdown-item active' : 'dropdown-item'
                  }
                >
                  All Products
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </Nav>

            {/* Right side phone call button */}
            <div className="d-flex align-items-center">
              <Button
                variant="outline-success"
                href="tel:+923001234567"
                className="fw-semibold"
              >
                📞 +92 300 1234567
              </Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasNavbar;
