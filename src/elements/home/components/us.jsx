import Fade from "react-reveal/Fade";
import AboutUs from "../../../assets/home/us/AboutUs.png";

export function Us() {
  return (
    <section className="section-us" id="us">
      <div className="container mt-4">
        <Fade duration={2000}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="title">ThingDev</h1>
              <h2 className="fs-5">Código de calidad, soluciones para tu empresa</h2>
              <p className="text-white">En ThingDev nos apasiona la programación y estamos comprometidos a brindar soluciones digitales de alta calidad a empresas de todos los tamaños. Con nuestra dedicación, experiencia y compromiso con la innovación, puede estar seguro de que obtendrá los mejores resultados. ¡Contáctanos hoy mismo y descubre lo que podemos hacer por vos!</p>
              <a href="#" className="link">
                Mas sobre nosotros y nuestro equipo →
              </a>
            </div>
            <div className="col-12 col-lg-6 pt-5 pb-5 pt-lg-0 pb-lg-0 d-flex">
              <img className="img-fluid" src={AboutUs} alt="Nosotros" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
