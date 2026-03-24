import "./Testimonios.css";

function Testimonios() {
  return (
    <section id="testimonios" className="section">
      <div className="container">

        <div className="reveal">
          <div className="section-label">06 — Voces</div>
          <h2 className="section-title">
            Del <em>territorio</em>
          </h2>
        </div>

        <div className="testi-layout">

          <div className="testi-card reveal">
            <div className="testi-quote">"</div>

            <p className="testi-text">
              A través de SERVI_CHOCO, los jóvenes de Tutunendo no solo somos
              guías, somos los guardianes de nuestra propia agua. El turismo nos
              dio una razón para quedarnos y proteger.
            </p>

            <div className="testi-author">
              <strong>— Yeison Rivas</strong>
              <span>GUÍA COMUNITARIO · TUTUNENDO</span>
            </div>
          </div>

          <div className="testi-card reveal">
            <div className="testi-quote">"</div>

            <p className="testi-text">
              Nunca imaginé que un viaje al Chocó cambiaría mi perspectiva de
              vida. Los guías jóvenes tienen un conocimiento profundo de la
              selva que no encontrarás en ningún libro.
            </p>

            <div className="testi-author">
              <strong>— Carolina Mejía</strong>
              <span>VIAJERA · BOGOTÁ</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonios;