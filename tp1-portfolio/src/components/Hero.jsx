import "../css/Hero.css";

function Hero(props) {
  return (
    <>
      <div>
        <section className="hero" id="hero">
          <p className="hero-saludo">¡Bienvenidos a mi portfolio!</p>
          <h1 className="hero-titulo">{props.nombre}</h1>
          <h2 className="hero-subtitulo">{props.profesion}</h2>
          <a href="projects" className="btn-Hero">
            Ver proyectos
          </a>
        </section>
      </div>
    </>
  );
}

export default Hero;
