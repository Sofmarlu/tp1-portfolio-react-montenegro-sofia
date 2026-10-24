import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "../css/SideBar.css";
function SideBar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link">
          Inicio
        </NavLink>

        <NavLink to="/about" className="sidebar-link">
          Sobre mí
        </NavLink>

        <NavLink to="/skills" className="sidebar-link">
          Habilidades
        </NavLink>

        <NavLink to="/projects" className="sidebar-link">
          Proyectos
        </NavLink>

        <NavLink to="/contact" className="sidebar-link">
          Contacto
        </NavLink>
      </nav>
      <Footer/>
    </aside>
  );
}

export default SideBar;
