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
            <a href="#hero" className="nav-menu-link active">
              Inicio
            </a>
          </li>
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
            <a href="#reference" className="nav-menu-link">
              Clientes
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


export function ActiveLinkNav() {
  window.addEventListener("load", function () {

    this.window.onscroll = () => {
      function obtenerIdDeSeccion() {
        const secciones = document.querySelectorAll("section"); // Cambia "section" al selector que estés utilizando para tus secciones
        let seccionActual = null;

        for (const seccion of secciones) {
          const rect = seccion.getBoundingClientRect();

          if (rect.top <= 70 && rect.bottom >= 70) {
            seccionActual = seccion.id;
            break; // Rompe el bucle una vez que se encuentra la sección actual
          }
        }

        return seccionActual;
      }

      // Uso de la función para obtener el ID de la sección actual
      const idDeSeccionActual = obtenerIdDeSeccion();
      document.querySelector("header nav ul li a.active").classList.remove('active')
      document.querySelector("[href*="+ idDeSeccionActual +"]").classList.add('active')
    }
  });
}