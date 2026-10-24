import { FaGithub } from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-nombre">Sofia Montenegro</p>
      <a
        href="https://github.com/Sofmarlu"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
        <span>GitHub</span>
      </a>

      <p className="footer-copy">
        © Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;