import Fade from "react-reveal/Fade";
import aboutimg from "../../../assets/home/services/about-img.png";
import iconservicio1 from "../../../assets/home/services/web0.svg";
import iconservicio2 from "../../../assets/home/services/database.svg";
import iconservicio3 from "../../../assets/home/services/fix.svg";
import disenoimg from "../../../assets/home/services/disenoimg.png";
import repsonsiveimg from "../../../assets/home/services/responsiveimg.png";
import hostingimg from "../../../assets/home/services/hostingimg.png";
import dominioimg from "../../../assets/home/services/dominioimg.png";
import soporteimg from "../../../assets/home/services/soporteimg.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

function ModalService({ desc }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (desc == 1) {
    return (
      <>
        <Button variant="" onClick={handleShow}>
          + info
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
          <Modal.Header closeButton>
            <img className="img-title" src={iconservicio1} alt="" />
            <h1 className="title fs-5">Diseño web desde Ø</h1>
          </Modal.Header>
          <Modal.Body>
            <>
              <Fade duration={1000}>
                <div className="container">
                  <p className="text-black">
                    En el mundo actual, una página web es imprescindible para cualquier empresa. <br />
                    Ofrece: <br />
                    ✅️ Visibilidad constante <br />
                    ✅️ Establece confiabilidad <br />
                    ✅️ Facilita la promoción y venta de productos <br />
                    ✅️ Posibilita la interacción con clientes <br />
                    ✅️ Proporciona datos clave para decisiones estratégicas. <br />
                    En síntesis, una página web es esencial para el éxito y la expansión en la era digital.
                  </p>

                  <p className="text-subtitle pb-2">Para esta necesidad nuestro servicio cuenta con las siguientes carcteristicas:</p>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Diseño personalizado</h4>
                      <p className="">Contamos con el equipo capacitado para realizar el diseño de una web totalmente personalizada, para que tu pagina no sea una genérica mas.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid" src={disenoimg} alt="Diseño Personalizado" />
                    </div>
                  </div>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Web responsive</h4>
                      <p className="">Diseños que se adaptan automáticamente a diferentes dispositivos y tamaños de pantalla, brindando una experiencia óptima para los usuarios y mejorando la visibilidad en los motores de búsqueda.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid" src={repsonsiveimg} alt="Web responsive" />
                    </div>
                  </div>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Hosting</h4>
                      <p className="">Nuestro servicio incluye el alojamiento y configuración de esta web de forma gratuita por un año.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid" src={hostingimg} alt="Hosting" />
                    </div>
                  </div>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Dominio</h4>
                      <p className="">Incluimos el dominio (Por ejemplo: MiDominio.com) para tu web, también la configuración de la misma.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid" src={dominioimg} alt="Dominio" />
                    </div>
                  </div>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Soporte técnico</h4>
                      <p className="">Contamos con especialistas en soporte técnico para solucionar cualquier inconveniente o duda que se presente post implementación de tu web..</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid mx-auto" src={soporteimg} alt="Soporte técnico" />
                    </div>
                  </div>
                </div>
              </Fade>
            </>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  if (desc == 2) {
    return (
      <>
        <Button variant="" onClick={handleShow}>
          + info
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
          <Modal.Header closeButton>
            <img className="img-title" src={iconservicio2} alt="" />
            <h1 className="title fs-5">Hosting</h1>
          </Modal.Header>
          <Modal.Body>
            <>
              <Fade duration={1000}>
                <div className="container">
                  <p className="text-black">Un hosting de calidad para su página web empresarial es esencial para almacenar los archivos y datos que la componen, permitiendo que esté disponible en línea. Garantiza velocidad de carga, seguridad de la información y un acceso constante, vital para la presencia y funcionalidad óptima de su negocio en la web.</p>

                  <p className="text-subtitle pb-2">Para esta necesidad nuestro servicio cuenta con las siguientes carcteristicas:</p>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Diseño personalizado</h4>
                      <p className="">Contamos con el equipo capacitado para realizar el diseño de una web totalmente personalizada, para que tu pagina no sea una genérica mas.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid" src={disenoimg} alt="Diseño Personalizado" />
                    </div>
                  </div>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Web responsive</h4>
                      <p className="">Diseños que se adaptan automáticamente a diferentes dispositivos y tamaños de pantalla, brindando una experiencia óptima para los usuarios y mejorando la visibilidad en los motores de búsqueda.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid" src={repsonsiveimg} alt="Web responsive" />
                    </div>
                  </div>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Hosting</h4>
                      <p className="">Nuestro servicio incluye el alojamiento y configuración de esta web de forma gratuita por un año.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid" src={hostingimg} alt="Hosting" />
                    </div>
                  </div>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Dominio</h4>
                      <p className="">Incluimos el dominio (Por ejemplo: MiDominio.com) para tu web, también la configuración de la misma.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid" src={dominioimg} alt="Dominio" />
                    </div>
                  </div>

                  <div className="row pb-5">
                    <div className="col-12 col-lg-6 text-center text-lg-start mt-auto mb-auto">
                      <h4 className="title">Soporte técnico</h4>
                      <p className="">Contamos con especialistas en soporte técnico para solucionar cualquier inconveniente o duda que se presente post implementación de tu web..</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <img className="img-fluid mx-auto" src={soporteimg} alt="Soporte técnico" />
                    </div>
                  </div>
                </div>
              </Fade>
            </>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

function Acordeon() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Qué servicios ofrecemos?</Accordion.Header>
        <Accordion.Body>
          Tenemos 3 principales servicios, <strong>diseño web</strong>, <strong>hosting</strong> y <strong>mantenimiento</strong>. Tambien ofrecemos <strong>software personalizado</strong>, ya sean aplicaciones de escritorio o móviles.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Cómo es el proceso con nosotros?</Accordion.Header>
        <Accordion.Body>
          Ya contratado el servicio se realizan las entregas acordadas, se brinda acceso al <strong>codigo fuente</strong>, <strong>hosting</strong> y <strong>dominios</strong> en los casos que corresponda. Entregamos <strong>manuales de usuarios</strong> y <strong>diseños</strong> respectivos al proyecto. Luego, si lo desea, tendrá a disposición un <strong>equipo de soporte</strong> para resolver cualquier duda post implementación.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Nuestros valores</Accordion.Header>
        <Accordion.Body>
          Como empresa de desarrollo de software, nuestros valores fundamentales guían cada aspecto de nuestra operación y reflejan nuestro compromiso con la excelencia y la satisfacción del cliente. Aquí están nuestros cinco principales valores:
          <br />
          <br />
          <strong>Innovación:</strong> Buscamos soluciones avanzadas.
          <br />
          <br />
          <strong>Calidad:</strong> Entregamos software confiable y seguro.
          <br />
          <br />
          <strong>Colaboración:</strong> Trabajamos en estrecha comunicación con clientes.
          <br />
          <br />
          <strong>Responsabilidad:</strong> Cumplimos plazos y responsabilidad social.
          <br />
          <br />
          <strong>Aprendizaje continuo:</strong> Nos mantenemos actualizados.
          <br />
          <br />
          Estos valores definen nuestro compromiso con la excelencia y la satisfacción del cliente en cada proyecto que abordamos.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export function Services() {
  return (
    <section className="service-section bg-black" id="service">
      <Fade duration={2000}>
        <div className="container p-5">
          <div className="row justify-content-center">
            <div class="col-lg-6 pb-5 pb-lg-0">
              <img className="img-fluid" src={aboutimg} alt="about img" />
            </div>
            <div class="col-lg-6">
              <h1 className="fw-bolder fs-2 pb-4">Código de calidad, soluciones para tu empresa</h1>
              <p className="text-white pb-4">En ThingDev nos apasiona la programación y estamos comprometidos a brindar soluciones digitales de alta calidad a empresas de todos los tamaños. Con nuestra dedicación, experiencia y compromiso con la innovación, puede estar seguro de que obtendrá los mejores resultados.</p>
              <Acordeon />
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={2000}>
        <div className="container pt-5 text-center pb-5 ">
          <h2 className="fw-bolder">Nuestros servicios</h2>
          <h3 className="fw-lighter  fs-6  text-white">Haz click en cualquiera de las tarjetas para mas información</h3>
        </div>
      </Fade>
      <Fade duration={2000}>
        <div className="container">
          <div className="row justify-content-between align-items-center pb-5">
            <div className="col-12 col-lg-6 p-5">
              <div className="tarjeta">
                <div>
                  <img className="icon mb-2" src={iconservicio1} alt="Diseño" />
                  <p className="title fs-5">Diseño web desde Ø</p>
                  <p className="text-black fs-6">Contarás con asesoramiento de nuestro equipo para que tu página se adapte a las necesidades y objetivo de tu proyecto.</p>
                  <ModalService desc={1} />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-5">
              <div className="tarjeta">
                <div>
                  <img className="icon mb-2" src={iconservicio2} alt="Hosting" />
                  <p className="title fs-5">Hosting</p>
                  <p className="text-black fs-6">Ofrecemos alojamiento para tu pagina web y asesoramiento para las instalaciones o migraciones de tus proyecto.</p>
                  <ModalService desc={2} />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-5">
              <div className="tarjeta">
                <div>
                  <img className="icon mb-2" src={iconservicio3} alt="Mantenimiento" />
                  <p className="title fs-5">Mantenimiento y mejoras</p>
                  <p className="text-black fs-6">Si necesitas mantenimiento o mejoras, tenemos un equipo de desarrollo que se encargará ello.</p>
                  <ModalService desc={1} />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-5">
              <div className="tarjeta">
                <div>
                  <img className="icon mb-2" src={iconservicio3} alt="Mantenimiento" />
                  <p className="title fs-5">Apps personalizadas</p>
                  <p className="text-black fs-6">Contamos con experiencia en desarrollo de Apps de escritorio o para móviles.</p>
                  <ModalService desc={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
