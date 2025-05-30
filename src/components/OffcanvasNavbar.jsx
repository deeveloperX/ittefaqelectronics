import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Button, Container, Nav, Navbar,
  NavDropdown, Offcanvas
} from 'react-bootstrap';
import logo from '../assets/apple-touch-icon.png';

function OffcanvasNavbar() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  // Auto-close Offcanvas on route change
  useEffect(() => {
    setShow(false);
  }, [location.pathname]);

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

        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShow(true)} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={() => setShow(false)}
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
            <div className="d-flex align-items-center mt-3 mt-lg-0">
              <Button
                variant="outline-success"
                href="tel:+923216126870"
                className="fw-semibold"
              >
                📞 +92 321 6126870
              </Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasNavbar;
