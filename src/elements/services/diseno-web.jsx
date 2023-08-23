import './services.css'
import serviceimg from '../../assets/web0.svg'

export function Diseno() {
    return (
        <div className='main'>
            <div className='title-cont'>
                <img className='img-title' src={serviceimg} alt="" />
                <h1 className='title-service'>Diseño web desde Ø</h1>
            </div>
            <div className='desc-cont'>
                <p className='desc-p'>
                    En el mundo actual, una página web es imprescindible para cualquier empresa. <br />
                    Ofrece: <br />
                    ✅️ Visibilidad constante <br />
                    ✅️ Establece confiabilidad <br />
                    ✅️ Facilita la promoción y venta de productos <br />
                    ✅️ Posibilita la interacción con clientes <br />
                    ✅️ Proporciona datos clave para decisiones estratégicas. <br />
                    En síntesis, una página web es esencial para el éxito y la expansión en la era digital.
                </p>
            </div>
            <div className='services-info'>
                <p className='services-p'>
                    Para esta necesidad nuestro servicio cuenta con las siguientes carcteristicas:
                </p>
                <div className='services-list'>
                    <div className='card-service'>
                        <h3 className='card-service-h3'>Diseño personalizado</h3>
                        <p className='card-service-p'>
                            Contamos con el equipo capacitado para realizar el diseño de una web totalmente personalizada, para que tu pagina no sea genérica mas.
                        </p>
                    </div>
                    <div className='card-service'>
                        <h3 className='card-service-h3'>Dominio</h3>
                        <p className='card-service-p'>
                            Incluimos el dominio (Por ejemplo: MiDominio.com.ar) para tu web, también la configuración de la misma.
                        </p>
                    </div>
                    <div className='card-service'>
                        <h3 className='card-service-h3'>Hosting</h3>
                        <p className='card-service-p'>
                            Nuestro servicio incluye el alojamiento y configuracion de esta web de forma gratuita por un año.
                        </p>
                    </div>
                    <div className='card-service'>
                        <h3 className='card-service-h3'>Soporte técnico</h3>
                        <p className='card-service-p'>
                            Contamos con especialistas en soporte técnico para solucionar cualquier inconveniente o duda que se presente post implementación de tu web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}