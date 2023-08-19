import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const footerr = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col
              md={4}
              sm={3}
              className="wow fadeInLeft "
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" />
            </Col>
            <Col
              md={4}
              sm={6}
              className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="NavFooter">
                <HashLink to="/#latest">latest</HashLink>
                <HashLink to="/#process">process</HashLink>
                <HashLink to="/#service">Services</HashLink>
                <HashLink to="/#contact">Contact Us</HashLink>
                <Link to="/Projects">Projects</Link>
              </div>
            </Col>
            <Col
              md={4}
              sm={3}
              className="wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="IconsLink">
                <Link
                  to="https://www.facebook.com/rania.yasser.1069/"
                  target="_blank"
                >
                  <FacebookIcon />
                </Link>
                <Link to="https://github.com/raniayasser/" target="_blank">
                  <GitHubIcon />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/rania-yasser-mohammed-abb596235/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Link>
              </div>
            </Col>
          </Row>
          <div
            className="copyright wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.5s"
          >
            <p>© 2022 RANIA_YASSER!</p>
            <p>Email: raniayasser227@gmail.com</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default footerr;
