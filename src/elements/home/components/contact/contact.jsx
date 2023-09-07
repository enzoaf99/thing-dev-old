import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./contact.css";
import insta from '../../../../assets/instagram.png'
import face from '../../../../assets/facebook.png'
import tw from '../../../../assets/twitter.png'
import li from '../../../../assets/linkedin.png'

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcata9c",
        "template_3lqxno8",
        form.current,
        "-gvj7bfTf187INtVz"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Enviado!", {
            duration: 4000,
            position: "bottom-center",
            icon: "👏",
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="sect-cont" id="contact">
      <h2 className="title-cont">Contacto</h2>
      <div className="container-cont">
        <div className="contc-form">
          <h2 className="subtile-form">Déjanos tu mensaje</h2>
          <form ref={form} onSubmit={sendEmail} className="cont-form">
            <input className="input-datos" type="text" required name="user_name" placeholder="Tu nombre completo..." />
            <input className="input-datos" type="email" required name="user_email" placeholder="Tu Email..." />
            <textarea className="form-message" name="message" required placeholder="Tu mensaje..." />
            <input className="form-submit" type="submit" value="Enviar" />
          </form>
        </div>
        <div className="contc-social">
          <h2 className="subtitle-social">Nuestras redes sociales</h2>
          <div className="social-cont">
            <a target="blank" href="https://www.instagram.com/thing.dev/"><img className="img-social" src={insta} alt="Instagram" /></a>
            <a target="blank" href="https://www.instagram.com/thing.dev/"><img className="img-social" src={face} alt="Facebook" /></a>
            <a target="blank" href="https://www.instagram.com/thing.dev/"><img className="img-social" src={tw} alt="Twitter" /></a>
            <a target="blank" href="https://www.linkedin.com/company/thing-dev/"><img className="img-social" src={li} alt="Linkedin" /></a>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
