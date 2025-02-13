import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../services/Config'; 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarSuscripcion = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMensaje('Por favor, ingresa un email válido.');
      return;
    }

    try {
      const suscripcionesRef = collection(db, 'suscripciones');
      const consulta = query(suscripcionesRef, where('email', '==', email));
      const resultado = await getDocs(consulta);

      if (!resultado.empty) {
        setMensaje('Este email ya está suscrito.');
        return;
      }

      await addDoc(suscripcionesRef, { email });
      setMensaje('¡Gracias por suscribirte!');
      setEmail('');
    } catch (error) {
      console.error('Error al verificar o guardar el email:', error);
      setMensaje('Por favor, ingresa un email válido');
    }
  };


  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-sections">
          
          <div className="footer-section">
            <h3 className="footer-title">ModoUrban</h3>
            <p className="footer-description">
              Descubre la mejor moda urbana. Calidad y estilo para tu día a día.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/delgadodevs" target="_blank" rel="noopener noreferrer" className="social-icon">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.instagram.com/delgadodevs" target="_blank" rel="noopener noreferrer" className="social-icon">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/delgadodevs" target="_blank" rel="noopener noreferrer" className="social-icon">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          
          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

         
          <div className="footer-section">
            <h4 className="footer-subtitle">Categorías</h4>
            <ul className="footer-links">
              <li><Link to="/category/Remera">Remeras</Link></li>
              <li><Link to="/category/Jean">Jeans</Link></li>
              <li><Link to="/category/Bermuda">Bermudas</Link></li>
              <li><Link to="/category/Zapatillas">Zapatillas</Link></li>
            </ul>
          </div>

          
          <div className="footer-section">
            <h4 className="footer-subtitle">Newsletter</h4>
            <p className="newsletter-text">Suscríbete para recibir las últimas novedades y ofertas exclusivas.</p>
            <form className="newsletter-form" onSubmit={manejarSuscripcion}>
              <input
                type="email"
                placeholder="Tu email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                Suscribirse
              </button>
            </form>
            {mensaje && <p className="mensaje-suscripcion">{mensaje}</p>}
          </div>
        </div>

        
        <div className="footer-divider"></div>

        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} ModoUrban. Todos los derechos reservados.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacidad</Link>
            <Link to="/terms">Términos</Link>
            <Link to="/shipping">Envíos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
