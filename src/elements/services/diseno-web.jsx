import './services.css'
import serviceimg from '../../assets/web0.svg'
import disenoimg from '../../assets/disenoimg.svg'
import repsonsiveimg from '../../assets/responsiveimg.svg'
import hostingimg from '../../assets/hostingimg.svg'
import dominioimg from '../../assets/dominioimg.svg'
import Fade from 'react-reveal/Fade';

export function Diseno() {
    return (
        <div className='main'>
            <Fade duration={3000}>
                <div className='cont-service'>
                    <div className='title-cont'>
                        <img className='img-title' src={serviceimg} alt=""/>
                        <h1 className='title-service'>Diseño web desde Ø</h1>
                    </div>
                    <div className='desc-cont'>
                        <p className='desc-p'>
                            En el mundo actual, una página web es imprescindible para cualquier empresa. <br/>
                            Ofrece: <br/>
                            ✅️ Visibilidad constante <br/>
                            ✅️ Establece confiabilidad <br/>
                            ✅️ Facilita la promoción y venta de productos <br/>
                            ✅️ Posibilita la interacción con clientes <br/>
                            ✅️ Proporciona datos clave para decisiones estratégicas. <br/>
                            En síntesis, una página web es esencial para el éxito y la expansión en la era digital.
                        </p>
                    </div>
                </div>
            </Fade>
            <div className='services-info'>
                <Fade duration={3000}>
                    <p className='services-p'>
                        Para esta necesidad nuestro servicio cuenta con las siguientes carcteristicas:
                    </p>
                </Fade>
                <Fade duration={4000}>
                    <div className='services-list'>
                        <div className='service-item'>
                            <div className='service-item-info'>
                                <h3 className='service-item-title'>Diseño personalizado</h3>
                                <p className='service-item-desc'>Contamos con el equipo capacitado para realizar el
                                    diseño
                                    de una web totalmente
                                    personalizada, para que tu pagina no sea genérica mas.</p>
                            </div>
                            <img src={disenoimg} className='service-item-img'/>
                        </div>
                    </div>
                </Fade>
                <Fade duration={4000}>
                    <div className='services-list'>
                        <div className='service-item'>
                            <img src={repsonsiveimg} className='service-item-img'/>
                            <div className='service-item-info'>
                                <h3 className='service-item-title'>Web responsive</h3>
                                <p className='service-item-desc'>Diseños que se adaptan automáticamente a diferentes
                                    dispositivos y tamaños de pantalla, brindando una experiencia óptima para los
                                    usuarios y
                                    mejorando la visibilidad en los motores de búsqueda.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade duration={4000}>
                    <div className='services-list'>
                        <div className='service-item'>
                            <div className='service-item-info'>
                                <h3 className='service-item-title'>Hosting</h3>
                                <p className='service-item-desc'>Nuestro servicio incluye el alojamiento y configuración
                                    de
                                    esta web de forma gratuita por un año.</p>
                            </div>
                            <img src={hostingimg} className='service-item-img'/>
                        </div>
                    </div>
                </Fade>
                <Fade duration={4000}>
                    <div className='services-list'>
                        <div className='service-item'>
                            <img src={dominioimg} className='service-item-img'/>
                            <div className='service-item-info'>
                                <h3 className='service-item-title'>Dominio</h3>
                                <p className='service-item-desc'>Incluimos el dominio (Por ejemplo: MiDominio.com) para
                                    tu
                                    web, también la configuración de la misma.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade duration={4000}>
                    <div className='services-list'>
                        <div className='service-item'>
                            <div className='service-item-info'>
                                <h3 className='service-item-title'>Soporte técnico</h3>
                                <p className='service-item-desc'>Contamos con especialistas en soporte técnico para
                                    solucionar cualquier inconveniente o duda que se presente post implementación de tu
                                    web.</p>
                            </div>
                            <img src={disenoimg} className='service-item-img'/>
                        </div>
                    </div>
                </Fade>
                <Fade duration={4000}>
                    <p className='contact-p'>
                        Contactanos para mas información ↓
                    </p>
                </Fade>
            </div>
        </div>
    )
}