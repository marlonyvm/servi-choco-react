import { useEffect, useState } from "react";
import "./Destinos.css";
import DestinoModal from "./DestinoModal";

function Destinos() {

  const [destinos, setDestinos] = useState([]);
  const [destinoActivo, setDestinoActivo] = useState(null);

  // 🔹 Cargar todos los destinos
  useEffect(() => {
    fetch("https://servichoco-production.up.railway.app/destinos")
      .then(res => res.json())
      .then(data => setDestinos(data))
      .catch(err => console.error(err));
  }, []);

  // 🔹 Abrir destino (trae info completa)
  const abrirDestino = async (id) => {
    try {
      const res = await fetch(`https://servichoco-production.up.railway.app/destinos/${id}`);
      const data = await res.json();
      setDestinoActivo(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="destinos" id="destinos">
      <div className="destinos-container">
      <div className="destinos-intro reveal">
        <div><div className="section-label">02 — Experiencias</div><h2 className="section-title">Destinos del<br></br><em>Pacífico</em></h2></div>
        <p>Desde las ballenas de Nuquí hasta las cascadas de Tutunendo, cada rincón del Chocó es una historia que merece ser vivida.</p>
      </div>
      <div className="destinos-grid">
        {destinos.map(d => (
          <div 
            key={d.id} 
            className="dest-card"
            onClick={() => abrirDestino(d.id)}
          >

            <div className="dest-img">
              {d.emoji}
            </div>

            <div className="dest-body">
              <h3>{d.nombre}</h3>

              <p className="tipo">
                {d.tipo}
              </p>

              <p className="desc">
                {d.descripcion}
              </p>

              <div className="precio">
                COP ${Number(d.precio).toLocaleString()} <small>/ persona / noche</small>
              </div>

              <button className="btn-ver">
                Ver más →
              </button>
            </div>

          </div>
        ))}
      </div>
      </div>

      {/* 🔥 MODAL */}
      {destinoActivo && (
        <DestinoModal
          destino={destinoActivo}
          onClose={() => setDestinoActivo(null)}
        />
      )}

    </section>
  );
}

export default Destinos;