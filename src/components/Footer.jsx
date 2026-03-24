import "./Footer.css";

function Footer() {
  return (
    <footer>

      {/* CTA */}
      <div className="footer-cta-bar">
        <p>
          ¿Listo para vivir el Chocó? <em>Reserva hoy.</em>
        </p>
        <a href="#reservar" className="btn-oro">
          Cotizar experiencia →
        </a>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="footer-main-grid">

        {/* LOGO + DESC */}
        <div>
          <span className="f-logo">
            SERVI<em>CHOCO</em>
          </span>

          <p className="f-desc">
            Turismo regenerativo y comunitario liderado por jóvenes en el
            corazón de la selva húmeda del Pacífico colombiano. Empoderando
            comunidades, restaurando cuencas.
          </p>

          <div className="f-socials">
            <a href="#" className="f-social">📷</a>
            <a href="#" className="f-social">👤</a>
            <a href="https://wa.me/573100000000" className="f-social">💬</a>
            <a href="mailto:contacto@servichoco.com" className="f-social">✉️</a>
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <span className="f-col-title">Navegar</span>
          <ul className="f-list">
            <li><a href="#hero">🏠 Inicio</a></li>
            <li><a href="#nosotros">👥 Quiénes somos</a></li>
            <li><a href="#destinos">🌿 Destinos</a></li>
            <li><a href="#mapa">🗺️ Mapa del Chocó</a></li>
            <li><a href="#reservar">📅 Cotizar y reservar</a></li>
            <li><a href="#pago">💳 Pagar reserva</a></li>
            <li><a href="#aliados">🤝 Aliados</a></li>
          </ul>
        </div>

        {/* DESTINOS */}
        <div>
          <span className="f-col-title">Destinos</span>
          <ul className="f-list">
            <li><a href="#">🐋 Nuquí</a></li>
            <li><a href="#">🐬 Bahía Solano</a></li>
            <li><a href="#">💧 Tutunendo</a></li>
            <li><a href="#">🌿 Bajo Baudó</a></li>
            <li><a href="#">🎭 Istmina</a></li>
            <li><a href="#">🐢 Acandí</a></li>
            <li><a href="#">🏞️ Riosucio</a></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <span className="f-col-title">Contacto</span>

          <div className="f-contact-item">
            <span className="f-ico">📍</span>
            <span>Quibdó, Chocó<br />Colombia</span>
          </div>

          <div className="f-contact-item">
            <span className="f-ico">📧</span>
            <a href="mailto:contacto@servichoco.com">
              contacto@servichoco.com
            </a>
          </div>

          <div className="f-contact-item">
            <span className="f-ico">📱</span>
            <a href="https://wa.me/573100000000">
              +57 310 000 0000
            </a>
          </div>

          <div className="f-contact-item">
            <span className="f-ico">⏰</span>
            <span>Lun–Sáb 8am–6pm</span>
          </div>

          <a href="https://wa.me/573100000000" className="f-wa-btn">
            💬 Hablar con un guía
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 <strong>SERVI_CHOCO</strong> — Hackathon Pacífico.
          Todos los derechos reservados.
        </p>

        <div className="f-bottom-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Cookies</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;