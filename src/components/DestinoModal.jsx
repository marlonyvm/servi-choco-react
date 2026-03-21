import { useEffect, useState } from "react";
import "./DestinoModal.css";

function DestinoModal({ destino, onClose }) {

    const [index, setIndex] = useState(0);
    
      const siguiente = () => {
        if (!destino.fotos) return;
        setIndex((index + 1) % destino.fotos.length);
      };
    
      const anterior = () => {
        if (!destino.fotos) return;
        setIndex((index - 1 + destino.fotos.length) % destino.fotos.length);
      };
    

  // 🔥 cerrar con ESC
  useEffect(() => {

  // 🔥 bloquear scroll
  document.body.style.overflow = "hidden";

  const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") siguiente();
      if (e.key === "ArrowLeft") anterior();
    };

  document.addEventListener("keydown", handleEsc);

  return () => {
    // 🔥 restaurar scroll
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", handleEsc);
  };

}, [index]);
   

  if (!destino) return null;

  const btnLeft = {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer"
  };

  const btnRight = {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer"
  };

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ❌ cerrar */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* HERO */}
        <div className="dest-modal-hero">
        <img id="dest-hero-img" src={destino.hero_img} alt={destino.nombre} />
        <div className="dest-modal-hero-overlay"></div>
        <div className="dest-modal-badge" id="dest-badge">{destino.badge}</div>
        <div className="dest-modal-title-area">
          <h2 id="dest-modal-h2">{destino.emoji}{destino.nombre}: <em>{destino.subtitulo}</em></h2>
          <div className="dest-modal-subtitle" id="dest-modal-sub">{destino.tipo}</div>
        </div>
      </div>

        <div className="dest-modal-body">
        {/*-- Chips de info --*/}
        <div className="dest-info-chips" id="dest-chip">
            {destino.chips?.map((chip, i) => (
                <div className="dest-chip" key={i}>{chip}</div>
                ))}
        </div>

        {/* CARRUSEL */}
    <div className="carousel">

      <img 
        key={index}
        src={destino.fotos?.[index]} 
        className="main-img"
      />

      <button className="left" onClick={anterior}>&lt;</button>
      <button className="right" onClick={siguiente}>&gt;</button>

    </div>

    {/* MINIATURAS */}
    <div className="thumbs">
      {destino.fotos?.map((foto, i) => (
        <img
          key={i}
          src={foto}
          onClick={() => setIndex(i)}
          className={i === index ? "active" : ""}
        />
      ))}
    </div>

        {/*<!-- Video -->*/}
        <div className="dest-video-section" id="dest-video-section">
          <div className="dest-video-label">Video del destino</div>
          <div className="dest-video-wrap">
            <iframe
                id="dest-video-frame" 
                src={`https://www.youtube.com/embed/${destino.video_id}?rel=0&modestbranding=1`}
                allowFullScreen loading="lazy">
            </iframe>
          </div>
        </div>

        {/*<!-- Texto descriptivo -->*/}
        <div className="dest-text-section">
          <div className="dest-text-label">Sobre el destino</div>
          <div className="dest-text-content" id="dest-text-content">
            <h3 dangerouslySetInnerHTML={{ __html: destino.texto_titulo }}/>
            {(destino.texto || []).map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div class="dest-text-highlight">{destino.highlight || ''}</div>
            </div>
        </div>
        </div>
        <div class="dest-modal-footer">
            <div class="dest-modal-price">
                Desde <strong id="dest-modal-precio">COP ${destino.precio.toLocaleString()}</strong> <span>/ persona / noche</span>
            </div>
            <button class="btn-reservar-dest" id="dest-modal-cta">Reservar este destino →</button>
        </div>
      

      </div>

    </div>
  );
}

export default DestinoModal;