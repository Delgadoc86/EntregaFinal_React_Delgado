import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Formulario.css';

const Formulario = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5dpxacq',
        'template_2aataq7',
        form.current,
        'mBAVgdv1MeLHatkts' 
      )
      .then(
        (result) => {
          console.log("Mensaje enviado:", result.text);
          setEnviado(true);
        },
        (error) => {
          console.log("Error al enviar:", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="seccion-formulario" id="Formulario">
      <div className="contenedor-formulario">
        <h2 className="formulario-titulo">Contáctanos</h2>
        <form ref={form} onSubmit={enviarCorreo} className="formulario-cuerpo">
          <div className="formulario-grupo">
            <label className="formulario-label">Nombre</label>
            <input className="formulario-input" type="text" name="from_name" required />
          </div>
          <div className="formulario-grupo">
            <label className="formulario-label">Correo Electrónico</label>
            <input className="formulario-input" type="email" name="from_email" required />
          </div>
          <div className="formulario-grupo">
            <label className="formulario-label">Número de Celular (WhatsApp)</label>
            <input
              className="formulario-input"
              type="tel"
              name="phone_number"
              pattern="^\+?[1-9]\d{1,14}$"
              required
            />
          </div>
          <div className="formulario-grupo">
            <label className="formulario-label">Mensaje</label>
            <textarea className="formulario-textarea" name="message" required />
          </div>
          <button className="boton-form" type="submit">Enviar</button>
        </form>

        {enviado && <p className="mensaje-exito">¡Tu mensaje ha sido enviado con éxito!</p>}
      </div>
    </section>
  );
};

export default Formulario;
