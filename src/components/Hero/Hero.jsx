import React from 'react';
import './Hero.css';

const Hero = ({ irALista }) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src="../img/Hero.webp" alt="Urban Fashion" />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <div className="hero__text-container">
          <h1 className="hero__title">
            <span>MODO</span>
            <span className="urban">URBAN</span>
          </h1>
          
          <p className="hero__description">
            Descubre tu estilo urbano. Viste la ciudad a tu manera.
          </p>

          <div className="hero__buttons">
            <button className="button button--secondary" onClick={irALista}>
              Nueva Colección
            </button>
          </div>

          <div className="hero__features">
            <div className="feature-card">
              <p className="feature-card__title">Envío Gratis</p>
              <p className="feature-card__description">En compras +$59.990</p>
            </div>
            <div className="feature-card">
              <p className="feature-card__title">-20% Descuento</p>
              <p className="feature-card__description">Primera compra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
