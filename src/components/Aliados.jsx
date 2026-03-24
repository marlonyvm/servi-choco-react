import "./Aliados.css";

function Aliados() {
  return (
    <section id="aliados" className="section">
      <div className="container">

        <div className="aliados-inner reveal">

          <div className="section-label center">
            07 — Alianzas
          </div>

          <h2 className="section-title center">
            Nuestros <em>aliados</em>
          </h2>

          <p className="center">
            Trabajamos con organizaciones comprometidas con el territorio y
            las comunidades del Pacífico colombiano.
          </p>

          <div className="aliados-grid">

            <div className="aliado-item">
              <h3>Fundación Te Abrazo Colombia</h3>
              <span>Desarrollo comunitario</span>
            </div>

            <div className="aliado-item">
              <h3>Comunidades del Pacífico</h3>
              <span>Red de sabedores</span>
            </div>

            <div className="aliado-item">
              <h3>Hackathon Pacífico 2026</h3>
              <span>Innovación social</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Aliados;