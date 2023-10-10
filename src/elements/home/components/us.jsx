import Fade from 'react-reveal/Fade';
import AboutUs from '../../../assets/home/us/AboutUs.png'

export function Us() {
  return (
    <section className="section-us" id="us">
      <div className="info-us">
        <Fade duration={2000}>
          <div className="info-text-us">
            <h1 className="h1-us">ThingDev</h1>
            <h2 className="h2-us">Código de calidad, soluciones para tu empresa</h2>
            <p className="p-us">
              En ThingDev nos apasiona la programación y estamos
              comprometidos a brindar soluciones digitales de alta calidad a empresas
              de todos los tamaños. Con nuestra dedicación, experiencia y compromiso
              con la innovación, puede estar seguro de que obtendrá los mejores
              resultados. ¡Contáctanos hoy mismo y descubre lo que podemos hacer por
              vos!
            </p>
            <a href="#" className="link-us">Mas sobre nosotros y nuestro equipo →</a>
          </div>
        </Fade>
        <Fade duration={2000}>
          <img className="info-img-us" src={AboutUs} alt="Nosotros" />
        </Fade>
      </div>
      <Fade duration={2000}>
        <div className="sect-info">
          
        </div>
      </Fade>
    </section>
  );
}
