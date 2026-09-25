import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/Projects.css";

const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Gestión de Turnos para un Consultorio",
    descripcion: "Sistema para un consultorio. CRUD",
    img: "/img/Screenshot_1.png",
    link: "https://vermillion-cheesecake-e4667d.netlify.app/",
  },
  {
    id: 2,
    titulo: "Primer Portfolio ",
    descripcion: "Primer portfolio de programacion para la materia programacion 3",
    img: "/img/image.png",
    link: "https://primerportfolioooo.netlify.app/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-titulo">Proyectos</h2>
      <div className="projects-lista">

        {proyectos.map((proyecto) => 
        (
          <Card className="projects-card" style={{ width: "18rem" }} key={proyecto.id}>
            <Card.Img variant="top" src={proyecto.img} />
            <Card.Body>
              <Card.Title>{proyecto.titulo}</Card.Title>
              <Card.Text>{proyecto.descripcion}</Card.Text>
              <Button  className="projects-btn" target="_blank" href={proyecto.link}>
                Ver proyecto
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;