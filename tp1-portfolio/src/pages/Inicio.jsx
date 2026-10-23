import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Inicio() {
  return (
    <>
      <Hero profesion="Full Stack Developer" nombre="Sofia Montenegro" />
      <About
        descripcion="Soy una estudiante de Programación en la UTN Facultad Regional Tucumán, formándome en desarrollo web y ciberseguridad. Me considero una persona curiosa y autodidacta, interesada en entender cómo funcionan las tecnologías y seguir aprendiendo a través de nuevos proyectos."
        anios={2}
        proyectosRealizados={2}
      ></About>
      <Skills></Skills>

      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Inicio;
