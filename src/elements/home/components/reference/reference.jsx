import "./reference.css";
import Brand1 from '../../../../assets/BlueAppLogo.png'
import Brand2 from '../../../../assets/GestionAppLogo.png'
import Brand3 from '../../../../assets/LogoAtentoMusico.png'
import Brand4 from '../../../../assets/PilonesLogo.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import BackgroundText from '../../../../assets/BackgroundText.png'


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
        <div className="cont-refe" style={{ backgroundImage: `url(${BackgroundText})` }}>
            <Fade duration={2000}>
                <div className="title-rf">
                    <h1 className="rf-h1">Clientes y Socios</h1>
                    <h2 className="rf-h2">Emprendimientos, proyectos y empresas que confiaron en nuestros servicios</h2>
                </div>
                <div>
                    <div className="cont-logos-carousel">
                        <Slider {...settings}>
                            <div>
                                <a className="cont-img" target="_blank" href="http://blueapp.com.ar"><img className="img-logo1" src={Brand1} alt="" /></a>
                            </div>
                            <div>
                                <a className="cont-img" target="_blank" href="http://pilonesgyh.com.ar"><img className="img-logo2" src={Brand4} alt="" /></a>
                            </div>
                            <div>
                                <a className="cont-img" href=""><img className="img-logo3" src={Brand3} alt="" /></a>
                            </div>
                            <div>
                                <a className="cont-img" href=""><img className="img-logo4" src={Brand2} alt="" /></a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Fade>
        </div>
    )
}