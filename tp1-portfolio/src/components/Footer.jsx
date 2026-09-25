import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-nombre">Sofia Montenegro</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;