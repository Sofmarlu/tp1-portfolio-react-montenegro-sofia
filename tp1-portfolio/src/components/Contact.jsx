import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/Contact.css";


function Contact() {
  const [copiado, setCopiado] = useState(false);

  const email = "sofymontenegroruiz@gmail.com";

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);

    setTimeout(() => setCopiado(false), 2000);
  };



  return (
    <section className="contact" id="contact">
      <Container>
        <h1 className="contact-titulo">Contacto</h1>

        <p className="contact-descripcion">
          ¿Tenés un proyecto en mente? Escribime : )
        </p>
        <br />

        <Row className="contact-links justify-content-center">

          <Col xs="auto">
            <button
              className="contact-link contact-icon-btn"
              onClick={copiarEmail}
            >
              <FaEnvelope className="contact-icon" />
              {copiado ? "¡Copiado!" : "Email"}
            </button>
          </Col>

          <Col xs="auto">
            <a
              href="https://github.com/Sofmarlu"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaGithub className="contact-icon" />
              GitHub
            </a>
          </Col>

          <Col xs="auto">
            <a
              href="https://ar.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="contact-icon" />
              LinkedIn
            </a>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Contact;
