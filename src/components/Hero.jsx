import "./Hero.css";
import { useEffect, useState } from "react";

const frases = ["Experiencias únicas lideradas por jóvenes para la restauración ecológica del departamento del Chocó",
  "Turismo regenerativo comunitario del Pacífico"
]

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex(prev => (prev + 1) % frases.length);
    }, 6000); // cambia cada 6s

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="section" id="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">Guardianes del Territorio · Chocó, Colombia</div>
        <h1 className="hero-title">
          Ríos que <br />fluyen
          <span className="line-italic">selvas que sanan</span>
        </h1>
        <div>
          <h1 className="fade-text">
            {frases[index]}
          </h1>
        </div>
        <div className="hero-btns">
          <a href="#reservar" className="btn-oro">Cotizar experiencia</a>
          <a href="#destinos" className="btn-outline">Explorar destinos</a>
        </div>
      </div>

    </section>
  );
}

export default Hero;