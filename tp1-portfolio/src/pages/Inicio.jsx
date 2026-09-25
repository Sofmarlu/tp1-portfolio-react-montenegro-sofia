import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

function Inicio() {
  return (
    <>
      <Header></Header>
      <Hero profesion="Full Stack developer" nombre="Sofia Montenegro" />
      <About
        descripcion="Soy estudiante de Programación en la UTN – Facultad Regional Tucumán, formándome en desarrollo web y ciberseguridad. Me considero una persona curiosa y autodidacta, interesada en entender cómo funcionan las tecnologías y seguir aprendiendo a través de nuevos proyectos."
        anios={2}
        proyectosRealizados={10}
      ></About>
    </>
  );
}

export default Inicio;
