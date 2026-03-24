import "./Nosotros.css";

function Nosotros() {
    const valores = ["🐋 Avistamiento de ballenas", "🌊 Experiencias únicas", "🍃 Turismo sostenible", "♻️ Impacto regenerativo",
        "🐋 Avistamiento de ballenas", "🌊 Experiencias únicas", "🍃 Turismo sostenible", "♻️ Impacto regenerativo",];

    return (

        <section className="section" id="nosotros">
            <div className="container">
                <div className="nosotros-grid">
                    <div className="nosotros-text reveal">
                        <div className="section-label">01 - Quienes Somos</div>
                        <h2 className="section-title">Comunidad que <br></br> <em>transforma</em> territorio</h2>
                        <p>Somos una plataforma de servicios turísticos que promueve el desarrollo local y el empoderamiento de las comunidades ribereñas del Chocó, el departamento más biodiverso de Colombia.</p>
                        <p>Vinculamos a la población juvenil como actor principal del cambio, convirtiendo el turismo regenerativo en una herramienta de protección ambiental y económica.</p>
                        <a href="#destinos" className="btn-oro">Vivir experiencias</a>
                    </div>
                    <div className="reveal">
                        <div className="nosotros-card-grid">
                            <div className="n-card tall"><span className="n-card-icon">🌊</span><h3>Ríos Sagrados</h3><p>El Atrato, el San Juan y Baudó, son las arterias vitales del Chocó. Los protegemos a través del turismo responsable y comunitario.</p></div>
                            <div className="n-card"><span className="n-card-icon">🌿</span><h3>Selva Viva</h3><p>Biodiversidad única. Guías locales que conocen cada especie.</p></div>
                            <div className="n-card"><span className="n-card-icon">🥁</span><h3>Cultura Afro</h3><p>Chirimía, marimba y tradiciones ancestrales como experiencia viva.</p></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* VALORES */}
            <div className="nosotros-valores">
                <div className="valores-content">
                    {[...valores, ...valores].map((v, i) => (
                        <span key={i}>{v}</span>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Nosotros;