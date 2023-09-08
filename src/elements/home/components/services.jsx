import Fade from 'react-reveal/Fade';
import aboutimg from '../../../assets/home/services/about-img.svg'
import ImagenServicio1 from '../../../assets/home/services/ImagenServicio1.png'
import ImagenServicio2 from '../../../assets/home/services/ImagenServicio2.png'
import ImagenServicio3 from '../../../assets/home/services/ImagenServicio3.png'
import iconservicio1 from '../../../assets/home/services/web0.png'
import iconservicio2 from '../../../assets/home/services/database.png'
import iconservicio3 from '../../../assets/home/services/fix.png'
export function Services() {
    return (
        <section className="service-section bg-black" id="service">
            <Fade duration={2000}>
                <div className="container-fluid pt-lg-5 pb-5 ">
                    <div className="row justify-content-center">
                        <div class="col-4">
                            <img className="img-fluid" src={aboutimg} alt="about img" />
                        </div>
                        <div class="col-4">
                            <h1 className="fw-bolder fs-2 pb-4">Código de calidad, soluciones para tu empresa</h1>
                            <p className="text-white pb-4">En ThingDev nos apasiona la programación y estamos comprometidos a brindar soluciones digitales de alta calidad a empresas de todos los tamaños. Con nuestra dedicación, experiencia y compromiso con la innovación, puede estar seguro de que obtendrá los mejores resultados.</p>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item mb-3 bg-black">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button rounded fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            ¿Qué servicios ofrecemos?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body bg-white rounded-bottom">
                                            Tenemos 3 principales servicios, <strong>diseño web</strong>, <strong>hosting</strong> y <strong>mantenimiento</strong>. Tambien ofrecemos <strong>software personalizado</strong>, ya sean aplicaciones de escritorio o móviles.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3 bg-black">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button rounded collapsed fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            ¿Cómo es el proceso con nosotros?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body bg-white rounded-bottom">
                                            Ya contratado el servicio se realizan las entregas acordadas, se brinda acceso al <strong>codigo fuente</strong>, <strong>hosting</strong> y <strong>dominios</strong> en los casos que corresponda. Entregamos <strong>manuales de usuarios</strong> y <strong>diseños</strong> respectivos al proyecto. Luego, si lo desea, tendrá a disposición un <strong>equipo de soporte</strong> para resolver cualquier duda post implementación.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3 bg-black">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button rounded collapsed fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Nuestros valores
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body bg-white rounded-bottom">
                                            Como empresa de desarrollo de software, nuestros valores fundamentales guían
                                            cada aspecto de nuestra operación y reflejan nuestro compromiso con la
                                            excelencia y la satisfacción del cliente. Aquí están nuestros cinco principales
                                            valores:<br /><br />
                                            <strong>Innovación:</strong> Buscamos soluciones avanzadas.<br /><br />
                                            <strong>Calidad:</strong> Entregamos software confiable y seguro.<br /><br />
                                            <strong>Colaboración:</strong> Trabajamos en estrecha comunicación con clientes.<br /><br />
                                            <strong>Responsabilidad:</strong> Cumplimos plazos y responsabilidad social.<br /><br />
                                            <strong>Aprendizaje continuo:</strong> Nos mantenemos actualizados.<br /><br />
                                            Estos valores definen nuestro compromiso con la excelencia y la satisfacción del
                                            cliente en cada proyecto que abordamos.
                                        </div>
                                    </div>
                                </div>
                                <a href="#contact" className='btn btn-pers'>Contáctanos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade duration={2000}>
                <div className='container pt-5 text-center'>
                    <h2 className="fw-bolder">Nuestros servicios</h2>
                    <h3 className="fw-light fs-6 ">Haz click en cualquiera de las tarjetas para mas información</h3>
                </div>
            </Fade>
            <Fade duration={2000}>
                <div className="">
                    <div className="">
                        <img className="" src={iconservicio1} alt="Diseño" />
                        <p className="">Diseño web desde Ø</p>
                        <p className="">Contarás con asesoramiento de nuestro equipo para que tu página se adapte a las necesidades y objetivo de tu proyecto/negocio.</p>
                        <a href="/diseno-web" className="">+ info</a>
                    </div>
                    <div className="">
                        <img className="" src={iconservicio2} alt="Hosting" />
                        <p className="">Hosting</p>
                        <p className="">Ofrecemos alojamiento para tu pagina web y asesoramiento para las instalaciones o migraciones de tus proyectos.</p>
                        <a href="#" className="">+ info</a>
                    </div>
                    <div className="">
                        <img className="" src={iconservicio3} alt="Mantenimiento" />
                        <p className="">Mantenimiento y mejoras</p>
                        <p className="">Si ya tienes una página web y necesita manteniendo, soporte o mejoras, tenemos un equipo de desarrollo que se encargará de la puesta a punto.</p>
                        <a href="#" className="">+ info</a>
                    </div>
                </div>
            </Fade>
            <Fade duration={2000}>
                <div className="">
                    <img className="" src={ImagenServicio1} alt="Diseño" />
                    <img className="" src={ImagenServicio2} alt="Hosting" />
                    <img className="" src={ImagenServicio3} alt="Mantenimiento" />
                </div>
            </Fade>
        </section>
    )
}