import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        Reach out to Ittefaq Electronics Sialkot through your preferred platform.
      </p>

      {/* Contact Cards */}
      <Row className="gy-4">
        {/* WhatsApp */}
        <Col md={6} lg={4}>
          <Card className="text-center h-100 shadow-sm border-0">
            <Card.Body>
              <FaWhatsapp size={40} className="text-success mb-3" />
              <Card.Title>WhatsApp</Card.Title>
              <Card.Text>Chat with us directly for support or orders.</Card.Text>
              <Button
                variant="success"
                size="sm"
                href="https://wa.me/923216126870?text=Hello%20Ittefaq%20Electronics%2C%20I%20have%20a%20query."
                target="_blank"
              >
                Message on WhatsApp
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Mobile */}
        <Col md={6} lg={4}>
          <Card className="text-center h-100 shadow-sm border-0">
            <Card.Body>
              <FaPhoneAlt size={36} className="text-primary mb-3" />
              <Card.Title>Mobile</Card.Title>
              <Card.Text>Call us directly for assistance.</Card.Text>
              <Button
                variant="outline-primary"
                size="sm"
                href="tel:+923216126870"
              >
                Call 0321 6126870
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Landline */}
        <Col md={6} lg={4}>
          <Card className="text-center h-100 shadow-sm border-0">
            <Card.Body>
              <FaPhoneAlt size={36} className="text-secondary mb-3" />
              <Card.Title>Landline</Card.Title>
              <Card.Text>Reach us at our office line.</Card.Text>
              <Button
                variant="outline-secondary"
                size="sm"
                href="tel:+92524596811"
              >
                Call 052 4596811
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Email */}
        <Col md={6} lg={4}>
          <Card className="text-center h-100 shadow-sm border-0">
            <Card.Body>
              <FaEnvelope size={36} className="text-danger mb-3" />
              <Card.Title>Email</Card.Title>
              <Card.Text>Send us your queries or feedback.</Card.Text>
              <Button
                variant="danger"
                size="sm"
                href="mailto:Faizanjum79@gmail.com"
              >
                Send Email
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Instagram */}
        <Col md={6} lg={4}>
          <Card className="text-center h-100 shadow-sm border-0">
            <Card.Body>
              <FaInstagram size={40} className="text-danger mb-3" />
              <Card.Title>Instagram</Card.Title>
              <Card.Text>Follow for updates and new arrivals.</Card.Text>
              <Button
                variant="outline-danger"
                size="sm"
                href="https://www.instagram.com/ittefaqelectronicssialkot"
                target="_blank"
              >
                Visit Instagram
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Facebook */}
        <Col md={6} lg={4}>
          <Card className="text-center h-100 shadow-sm border-0">
            <Card.Body>
              <FaFacebookF size={40} className="text-primary mb-3" />
              <Card.Title>Facebook</Card.Title>
              <Card.Text>Like and message us on Facebook.</Card.Text>
              <Button
                variant="primary"
                size="sm"
                href="https://www.facebook.com/share/1HezbQcnX6/?mibextid=wwXIfr"
                target="_blank"
              >
                Visit Facebook
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Location Card with Map */}
      <Card className="mt-5 shadow-sm border-0">
        <Card.Body>
          <div className="text-center mb-4">
            <FaMapMarkerAlt size={40} className="text-dark mb-2" />
            <h4 className="fw-bold">Our Location</h4>
            <p className="text-muted">
              Visit our physical store in Sialkot, Pakistan.
            </p>
            <Button
              variant="dark"
              size="sm"
              href="https://maps.app.goo.gl/c8prChz9Vwets2FE7?g_st=iw"
              target="_blank"
            >
              Open in Google Maps
            </Button>
          </div>

          {/* Embedded Google Map */}
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.862042351698!2d74.5343447!3d32.4886755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eeaa2793fba35%3A0xb66f8f2f40979b3c!2sIttefaq%20Electronics%2C%20Sialkot!5e0!3m2!1sen!2s!4v1717082037098!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ittefaq Electronics Map"
            ></iframe>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;
