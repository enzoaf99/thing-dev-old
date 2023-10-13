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
    <section className="section-cont bg-black pt-5 pb-5" id="contact">
      <div className="container">
        <h2 className="title text-center pb-5">Contacto</h2>
        <div className="row d-flex justify-content-around">
          <div className="col-12 col-lg-4">
            <h2 className="subtitle text-center">Déjanos tu mensaje</h2>
            <form ref={form} onSubmit={sendEmail} className="text-center">
              <input type="text" class="form-control mb-2" required name="user_name" placeholder="Tu nombre completo..." />
              <input type="email" class="form-control mb-2" required name="user_email" placeholder="Tu Email..." />
              <textarea name="message" class="form-control mb-2" required placeholder="Tu mensaje..." />
              <input className="btn" type="submit" value="Enviar" />
            </form>
          </div>
          <div className="col-12 col-lg-4">
            <h2 className="subtitle text-center">Nuestras redes sociales</h2>
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
        </div>
      </div>
      <Toaster />
    </section>
  );
}
