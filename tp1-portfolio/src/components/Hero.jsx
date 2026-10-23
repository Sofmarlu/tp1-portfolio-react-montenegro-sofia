import {Link} from "react-router-dom";
import "../css/Hero.css";

function Hero({profesion, nombre}) {
  return (
    <>
      <div>
        <section className="hero" id="hero">
          <p className="hero-saludo">¡Bienvenidos a mi portfolio!</p>
          <h1 className="hero-titulo">{nombre}</h1>
          <h2 className="hero-subtitulo">{profesion}</h2>
          <Link to="projects" className="btn-Hero">
            Ver proyectos
          </Link>
        </section>
      </div>
    </>
  );
}

export default Hero;
