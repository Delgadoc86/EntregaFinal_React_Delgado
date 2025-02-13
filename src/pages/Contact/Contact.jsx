import React from 'react';
import Formulario from '../../components/Formulario/Formulario';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contacto</h1>
          <div className="contact-description">
            <p>¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte.</p>
            <p>Complete el formulario y nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 - 21:00</p>
              <p>Sábados: 9:00 - 14:00</p>
            </div>
            <div className="contact-info-item">
              <h3>Información de Contacto</h3>
              <p>Email: info@modourban.com</p>
              <p>Teléfono: (261) 747-8090</p>
            </div>
            <div className="contact-info-item">
              <h3>Ubicación</h3>
              <p>Calle Ozamis Sur</p>
              <p>Mendoza, Argentina</p>
            </div>
          </div>

          <div >
            <Formulario />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;