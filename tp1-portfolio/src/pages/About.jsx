import "../css/About.css";

function About({descripcion, anios, proyectosRealizados}) {
  return (
    <>
      <section className="about" id="about">
        <h2 className="about-titulo">Sobre mí</h2>

        <p className="about-descripcion">{descripcion}</p>

        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-numero">+{anios} años</span>
            <span className="about-stat-label">Estudiando tecnologías e informática</span>
          </div>

          <div className="about-stat">
            <span className="about-stat-numero">
              +{proyectosRealizados} Proyectos
            </span>
            <span className="about-stat-label">Realizados</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
