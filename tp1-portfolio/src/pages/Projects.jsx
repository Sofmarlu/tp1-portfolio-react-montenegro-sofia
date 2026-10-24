import ProjectCard from "../components/ProjectCard";
import "../css/Projects.css";

const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Gestión de Turnos para un Consultorio",
    descripcion: "Sistema para un consultorio. CRUD",
    img: "/img/Screenshot_1.png",
    link: "https://vermillion-cheesecake-e4667d.netlify.app/",
    tecnologias: ["html","css","javascript", "bootstrap"],
  },
  {
    id: 2,
    titulo: "Primer Portfolio ",
    descripcion: "Primer portfolio para la materia Programacion 3",
    img: "/img/image.png",
    link: "https://primerportfolioooo.netlify.app/",
    tecnologias: ["html","css","javascript", "bootstrap"]
  },
  {
    id: 3,
    titulo: "Argetina Advture Tours ",
    descripcion: "Practicando maquetado con html y css",
    img: "/img/arg-adventure.png",
    link: "https://argentina-adventure-tourss.netlify.app/",
    tecnologias: ["html", "css"]
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-titulo">Proyectos</h2>
      <div className="projects-lista">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.id} {...proyecto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
