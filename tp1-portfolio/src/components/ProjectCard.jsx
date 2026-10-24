import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaJs, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiVite } from "react-icons/si";

const iconos = {
  
  javascript: { icono: <FaJs />, nombre: "JavaScript" },
  html: { icono: <FaHtml5 />, nombre: "HTML" },
  css: { icono: <FaCss3Alt />, nombre: "CSS" },
  bootstrap: { icono: <FaBootstrap />, nombre: "Bootstrap" },
  vite: { icono: <SiVite />, nombre: "Vite" },
};

function ProjectCard({ titulo, descripcion, img, link, tecnologias = []}) {
  return (
    <Card className="projects-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <div className="projects-techs">
          {tecnologias.map((t) => (
            <span key={t} className="projects-tech" title={iconos[t]?.nombre}>
              {iconos[t]?.icono}
            </span>
          ))}
        </div>
        <Button className="projects-btn" target="_blank" href={link}>
          Ver proyecto
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
