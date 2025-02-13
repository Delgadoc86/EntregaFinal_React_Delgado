import { useEffect, useState } from "react";
import { ShoppingBag, Globe, Users } from "lucide-react";
import './About.css';

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 500);
    return () => clearTimeout(timer); // Limpieza para evitar posibles fugas de memoria
  }, []);

  return (
    <section className="about-container">
      <div className={`about-content ${fadeIn ? "fade-in" : ""}`}>
        <div className="about-text">
          <h1>Moda Urbana con Identidad</h1>
          <p>
            Desde Mendoza para el mundo, redefinimos la moda urbana con diseños
            exclusivos y materiales de alta calidad. Nuestra esencia combina
            estilo, comodidad y actitud.
          </p>
          <div className="icons">
            {[{
              icon: ShoppingBag,
              text: "Calidad Premium"
            },
            {
              icon: Globe,
              text: "Envíos A todo el País"
            },
            {
              icon: Users,
              text: "Comunidad Exclusiva"
            }].map(({ icon: Icon, text }, index) => (
              <div key={index} className="icon-box">
                <Icon size={40} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img src="/img/About.webp" alt="Ropa urbana moderna en Mendoza" />
        </div>
      </div>
    </section>
  );
};

export default About;
