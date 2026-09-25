import "../css/Hero.css";

function Hero(props) {
  return (
    <>
      <div>
        <section className="hero" id="hero">
          <p className="hero-saludo">Bienvenido a mi portfolio</p>
          <h1 className="hero-titulo">{props.profesion}</h1>
          <h2 className="hero-subtitulo">{props.nombre}</h2>
          <a href="#projects" className="btn-Hero">
            Ver proyectos
          </a>
        </section>
      </div>
    </>
  );
}

export default Hero;
