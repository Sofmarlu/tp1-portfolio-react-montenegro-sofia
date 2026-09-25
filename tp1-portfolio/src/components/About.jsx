import "../css/About.css";

function About(props) {
  return (
    <>
      <section className="about">
        <h2 className="about-titulo">Sobre mi</h2>

        <p className="about-descripcion">{props.descripcion}</p>

        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-numero">+{props.anios} años</span>
            <span className="about-stat-label">Estudiando tecnología</span>
          </div>

          <div className="about-stat">
            <span className="about-stat-numero">
              +{props.proyectosRealizados}Proyectos
            </span>
            <span className="about-stat-label">Realizados</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
