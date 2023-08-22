import "./navbar.css";
import logo from "../../assets/thing.png"

export function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <img className="logo-header" src={logo} alt="Thing" />
        <button className="nav-toggle" aria-label="Abrir menú">
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <a href="#service" className="nav-menu-link">
              Servicios
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#us" className="nav-menu-link">
              Nosotros
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#contact" className="nav-menu-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function ResponsiveNav() {
  window.addEventListener("load", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu_visible");

      if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
      } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  });
}
