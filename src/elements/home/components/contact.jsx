import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import insta from "../../../assets/home/contact/instagram.png";
import face from "../../../assets/home/contact/facebook.png";
import tw from "../../../assets/home/contact/twitter.png";
import li from "../../../assets/home/contact/linkedin.png";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_zcata9c", "template_3lqxno8", form.current, "-gvj7bfTf187INtVz").then(
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
    <section className="section-cont bg-black pt-2 pb-2 pt-lg-5 pb-lg-5" id="contact">
      <div className="container pb-5">
        <h2 className="title text-center pt-2 pt-lg-5">Contacto</h2>
        <p className="fs-6 text-center text-white pt-0 pb-2 pt-lg-2 pb-lg-5">Puedes contactarnos por cualquiera de nuestros canales. Cuéntanos tu proyecto y te guiaremos para que accedas al mejor servicio.</p>
        <div className="row d-flex justify-content-around pt-5">
          <div className="col-12 col-lg-4">
            <h2 className="subtitle text-center pb-4">Déjanos tu mensaje</h2>
            <form ref={form} onSubmit={sendEmail} className="text-center">
              <input type="text" class="form-control mb-3" required name="user_name" placeholder="Tu nombre completo..." />
              <input type="email" class="form-control mb-3" required name="user_email" placeholder="Tu Email..." />
              <textarea name="message" class="form-control mb-3" required placeholder="Tu mensaje..." />
              <input className="btn mt-2" type="submit" value="Enviar" />
            </form>
          </div>
          <div className="col-12 col-lg-4 pt-4 pb-4 ps-4 pe-4 pt-lg-0 pb-lg-0 ps-lg-0 pe-lg-0">
            <h2 className="subtitle text-center pb-4">Nuestras redes sociales</h2>
            <div className="row">
              <div className="col-3">
                <a target="blank" href="https://www.instagram.com/thing.dev/">
                  <img src={insta} alt="Instagram" />
                </a>
              </div>
              <div className="col-3">
                <a target="blank" href="https://www.instagram.com/thing.dev/">
                  <img src={face} alt="Facebook" />
                </a>
              </div>
              <div className="col-3">
                <a target="blank" href="https://www.instagram.com/thing.dev/">
                  <img src={tw} alt="Twitter" />
                </a>
              </div>
              <div className="col-3">
                <a target="blank" href="https://www.linkedin.com/company/thing-dev/">
                  <img src={li} alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 pt-4">
            <h2 className="subtitle text-center pb-4">Somos de Buenos Aires, Argentina</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6550134.811647527!2d-70.07887713443925!3d-36.7151631613226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb7595281d9%3A0x4ad309fcdcf0a144!2sProvincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1697291074871!5m2!1ses-419!2sar" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
