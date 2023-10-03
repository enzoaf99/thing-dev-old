import Fade from 'react-reveal/Fade';
import ImagenHero from '../../../assets/home/hero/ImagenHero.png'
import BackgroundText from '../../../assets/home/hero/BackgroundText.png'
import Typed from 'typed.js'
import { useEffect, useRef } from "react";

export function Hero() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Proyecto', 'Negocio'],
            startDelay: 300,
            typeSpeed: 150,
            backDelay: 750,
            backSpeed: 150,
            smartBackspace: true,
            showCursor: false,
            loop: true,
        });
    });

    return (
        <section className="container-fluid" id="hero" style={{ backgroundImage: `url(${BackgroundText})` }}>
            <Fade duration={4000}>
                <div className='container-fluid hero-text'>
                    <div className='row justify-content-center pb-5 pt-5'>
                        <div className='m-xl-auto col-xl-4 col-md-10 pb-5'>
                            <p className='fs-4 fw-bolder pb-3'>Bienvenido a Thing</p>
                            <h2 className='fs-1 fw-bolder text-white pb-3'>Digitaliza ahora<br />tu <span ref={el}></span></h2>
                            <h3 className='fs-6 fw-light text-white pb-3'>Somos una empresa dedicada al inserción de proyectos en el mundo digital.</h3>
                            <a href="#service" className='btn btn-pers'>Saber mas</a>
                        </div>
                        <div className='col-xl-6 col-md-10 pb-5'>
                            <img className="img-fluid" src={ImagenHero} alt="Hero" />
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}