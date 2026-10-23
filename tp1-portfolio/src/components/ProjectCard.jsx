import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard ({titulo, descripcion, img, link}) {
   return(
    <Card className="projects-card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
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