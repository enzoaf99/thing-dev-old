import Brand1 from '../../../assets/home/reference/BlueAppLogo.png'
import Brand2 from '../../../assets/home/reference/GestionAppLogo.png'
import Brand3 from '../../../assets/home/reference/LogoAtentoMusico.png'
import Brand4 from '../../../assets/home/reference/PilonesLogo.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import BackgroundText from '../../../assets/home/hero/BackgroundText.png'


export function Reference() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", }}
                onClick={onClick}
            />
        );
    }

    function SampleBackArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleBackArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    };
    return (
        <section id="reference" className="cont-refe" style={{ backgroundImage: `url(${BackgroundText})` }}>
            <Fade duration={2000}>
                <div className="title-rf">
                    <h1 className="rf-h1">Clientes y Socios</h1>
                    <h2 className="rf-h2">Emprendimientos, proyectos y empresas que confiaron en nuestros servicios</h2>
                </div>
                <div>
                    <div className="cont-logos-carousel">
                        <Slider {...settings}>
                            <div>
                                <a className="cont-img" target="_blank" href="http://blueapp.com.ar"><img className="img-logo1" src={Brand1} alt="BlueApp" /></a>
                            </div>
                            <div>
                                <a className="cont-img" target="_blank" href="http://pilonesgyh.com.ar"><img className="img-logo2" src={Brand4} alt="PilonesGYH" /></a>
                            </div>
                            <div>
                                <a className="cont-img" href="https://atentomusico.com/"><img className="img-logo3" src={Brand3} alt="Atento Musico" /></a>
                            </div>
                            <div>
                                <a className="cont-img" href="http://gestionapp.com/"><img className="img-logo4" src={Brand2} alt="GestionApp" /></a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Fade>
        </section>
    )
}