import "./services.css"
import Fade from 'react-reveal/Fade';
import ImagenServicio1 from '../../../../assets/ImagenServicio1.png'
import ImagenServicio2 from '../../../../assets/ImagenServicio2.png'
import ImagenServicio3 from '../../../../assets/ImagenServicio3.png'

export function Services() {
    return (
        <section className="service" id="service">
            <Fade duration={2000}>
                <h2 className="title-service">Nuestros servicios</h2>
                <h3 className="subtitle-service">Haz click en cualquiera de las tarjetas para mas información</h3>
            </Fade>
            <Fade duration={2000}>
                <div className="card-list">
                    <div className="card">
                        <img className="card-icon" src="./src/assets/web0.png" alt="Diseño" />
                        <p className="card-title">Diseño web desde Ø</p>
                        <p className="card-info">Contarás con asesoramiento de nuestro equipo para que tu página se adapte a las necesidades y objetivo de tu proyecto/negocio.</p>
                        <a href="#" className="card-plus">+ info</a>
                    </div>
                    <div className="card">
                        <img className="card-icon" src="./src/assets/database.png" alt="Hosting" />
                        <p className="card-title">Hosting</p>
                        <p className="card-info">Ofrecemos alojamiento para tu pagina web y asesoramiento para las instalaciones o migraciones de tus proyectos.</p>
                        <a href="#" className="card-plus">+ info</a>
                    </div>
                    <div className="card">
                        <img className="card-icon" src="./src/assets/fix.png" alt="Mantenimiento" />
                        <p className="card-title">Mantenimiento y mejoras</p>
                        <p className="card-info">Si ya tienes una página web y necesita manteniendo, soporte o mejoras, tenemos un equipo de desarrollo que se encargará de la puesta a punto.</p>
                        <a href="#" className="card-plus">+ info</a>
                    </div>
                </div>
            </Fade>
            <Fade duration={2000}>
                <div className="img-list">
                    <img className="img-service1" src={ImagenServicio1} alt="Diseño" />
                    <img className="img-service2" src={ImagenServicio2} alt="Hosting" />
                    <img className="img-service3" src={ImagenServicio3} alt="Mantenimiento" />
                </div>
            </Fade>
        </section>
    )
}