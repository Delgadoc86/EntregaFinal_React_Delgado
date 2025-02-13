import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './faq.css'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Realizan envíos a todo el país?",
      answer: "Sí, realizamos envíos a todo Argentina a través de Correo Argentino y empresas de logística privadas. Los envíos a Mendoza capital pueden recibirse en el mismo día."
    },
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer: "Para Mendoza capital: 24 horas. Resto del país: 3-7 días hábiles dependiendo de la localidad."
    },
    {
      question: "¿Tienen local físico?",
      answer: "Sí, nuestro showroom está ubicado en calle Arístides Villanueva, Mendoza Capital. Abierto de lunes a sábados de 10 a 20hs."
    },
    {
      question: "¿Cómo puedo realizar un cambio?",
      answer: "Tenés 30 días para realizar cambios. Podés acercarte a nuestro local o coordinar el envío por correo. El producto debe estar en perfectas condiciones con las etiquetas originales."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las tarjetas de crédito y débito, transferencia bancaria, y efectivo en nuestro local. También trabajamos con MercadoPago y TodoPago."
    },
    {
      question: "¿Tienen tabla de talles?",
      answer: "Sí, en cada producto encontrarás nuestra guía de talles detallada. También podés consultar con nuestro equipo para asesoramiento personalizado."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <header className="faq-header">
          <h1 className="faq-title">Preguntas Frecuentes</h1>
          <p className="faq-subtitle">Todo lo que necesitas saber sobre ModoUrban</p>
        </header>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
                <svg 
                  className="faq-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <p className="faq-contact-text">¿No encontraste lo que buscabas?</p>
          <Link to="/contact"  className="contact-button">
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;