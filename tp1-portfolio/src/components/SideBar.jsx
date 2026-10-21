import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <aside>
        <h2>Sofia</h2>
        <br />
        <h2>Montenegro</h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Sobre Mi</NavLink>
          <NavLink to="/skills">Habilidades</NavLink>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </nav>
      </aside>
    </div>
  );
}

export default SideBar;
