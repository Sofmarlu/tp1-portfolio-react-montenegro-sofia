import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard () {
   return(
    <Card className="projects-card" style={{ width: "18rem" }} key={proyecto.id}>
            <Card.Img variant="top" src={proyecto.img} />
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
              <Button  className="projects-btn" target="_blank" href={link}>
                Ver proyecto
              </Button>
            </Card.Body>
          </Card>
   )
}

export default ProjectCard