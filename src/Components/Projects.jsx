import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProject(res.data.projects);
    });
  }, []);
  return (
    <>
      <section className="Projects">
        <h3
          className="headPro wow fadeInDown"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          All Projects
        </h3>
        <img
          src="images/623503637e979197919c6c03_Topology-1 (1).svg"
          alt=""
          className="waves"
        />

        <Container>
          <Row>
            {projects.map((project) => (
              <Col
                md={4}
                sm={6}
                className="Card wow fadeInUp "
                data-wow-duration="2s"
                data-wow-delay="0.5s"
                key={project.id}
              >
                <div className="cardd">
                  <img src={project.photo} alt="" />
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href={project.link}>View</a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
