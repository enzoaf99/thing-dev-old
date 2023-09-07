import "./hero.css"
import Fade from 'react-reveal/Fade';
import ImagenHero from '../../../../assets/ImagenHero.png'
import BackgroundText from '../../../../assets/BackgroundText.png'
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
        <section className="hero" id="hero" style={{ backgroundImage: `url(${BackgroundText})` }}>
            <Fade duration={2000}>
                <div className="info">
                    <p className="info-p">Bienvenido a Thing</p>
                    <h2 className="info-title">Digitaliza tu <span ref={el}></span></h2>
                    <h3 className="info-subtitle">Somos una empresa dedicada al inserción de proyectos en el mundo digital.</h3>
                    <button className="btn-info">Saber Más</button>
                </div>
            </Fade>
            <Fade duration={2000}>
                <div>
                    <img className="img-hero" src={ImagenHero} alt="Hero" />
                </div>
            </Fade>
        </section>
    );
}