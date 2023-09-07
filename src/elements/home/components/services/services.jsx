import "./services.css"
import Fade from 'react-reveal/Fade';
import aboutimg from '../../../../assets/about-img.svg'
import ImagenServicio1 from '../../../../assets/ImagenServicio1.png'
import ImagenServicio2 from '../../../../assets/ImagenServicio2.png'
import ImagenServicio3 from '../../../../assets/ImagenServicio3.png'
import iconservicio1 from '../../../../assets/web0.png'
import iconservicio2 from '../../../../assets/database.png'
import iconservicio3 from '../../../../assets/fix.png'
export function Services() {
    return (
        <section className="service-section" id="service">
            <Fade duration={2000}>
                <img className="aboutimg" src={aboutimg} alt="about img" />



                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Acordeón artículo #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Este es el cuerpo del acordeón del primer elemento.</strong> Se muestra de forma predeterminada, hasta que el complemento de colapso agrega las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Acordeón artículo #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Este es el cuerpo del acordeón del segundo elemento.</strong> Está oculto de manera predeterminada, hasta que el complemento de Collapse agregue las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Acordeón artículo #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Este es el cuerpo del acordeón del tercer elemento.</strong> Está oculto de manera predeterminada, hasta que el complemento Collapse agregue las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
                            </div>
                        </div>
                    </div>
                </div>





            </Fade>
            <Fade duration={2000}>
                <h2>Nuestros servicios</h2>
                <h3 className="subtitle-service">Haz click en cualquiera de las tarjetas para mas información</h3>
            </Fade>
            <Fade duration={2000}>
                <div className="card-list">
                    <div className="card">
                        <img className="card-icon" src={iconservicio1} alt="Diseño" />
                        <p className="card-title">Diseño web desde Ø</p>
                        <p className="card-info">Contarás con asesoramiento de nuestro equipo para que tu página se adapte a las necesidades y objetivo de tu proyecto/negocio.</p>
                        <a href="/diseno-web" className="card-plus">+ info</a>
                    </div>
                    <div className="card">
                        <img className="card-icon" src={iconservicio2} alt="Hosting" />
                        <p className="card-title">Hosting</p>
                        <p className="card-info">Ofrecemos alojamiento para tu pagina web y asesoramiento para las instalaciones o migraciones de tus proyectos.</p>
                        <a href="#" className="card-plus">+ info</a>
                    </div>
                    <div className="card">
                        <img className="card-icon" src={iconservicio3} alt="Mantenimiento" />
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