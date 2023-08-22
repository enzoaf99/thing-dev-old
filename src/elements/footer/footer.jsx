import "./footer.css";
import logo from "../../assets/thingblack.png"

export function Footer() {
    return (
        <div className="footer">
            <img className="brand-name" src={logo} alt="Thing" />
            <p className="derechos">Derechos reservados Thing.com.ar</p>
        </div>
    )
}