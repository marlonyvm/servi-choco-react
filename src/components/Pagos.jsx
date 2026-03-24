import { useState, useEffect } from "react";
import "./Pagos.css";
import ModalPSE from "./ModalPSE";
import ModalTarjeta from "./ModalTarjeta";

function Pagos() {

  const [modal, setModal] = useState(null);

  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  // 🔒 bloquear scroll cuando hay modal
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
  }, [modal]);

  // ⌨ cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section id="pago" className="section">
        <div className="container">

          <div className="pago-grid">

            {/* IZQUIERDA */}
            <div className="pago-intro reveal">

              <div className="section-label">05 — Pagos</div>

              <h2 className="section-title">
                Paga con<br /><em>total seguridad</em>
              </h2>

              <p>
                Aceptamos pagos a través de PSE (débito bancario) y tarjetas
                crédito/débito. Todas las transacciones están protegidas con
                cifrado SSL de 256 bits.
              </p>

              <div className="sec-badges">
                <div className="sec-badge">🔒 <strong>SSL 256-bit</strong></div>
                <div className="sec-badge">🏦 <strong>PSE</strong> ACH Colombia</div>
                <div className="sec-badge">💳 <strong>Visa / Mastercard</strong></div>
              </div>

            </div>

            {/* DERECHA */}
            <div className="pago-opciones reveal">

              {/* PSE */}
              <div className="pago-card">

                <div className="pago-card-header">
                  <h3>Pago por PSE</h3>
                  <span className="pse-pill">PSE</span>
                </div>

                <p>
                  Débito directo desde tu cuenta bancaria colombiana.
                  Compatible con todos los bancos.
                </p>

                <button
                  className="btn-pago"
                  onClick={() => openModal("pse")}
                >
                  🏦 Pagar con PSE
                </button>

              </div>

              {/* TARJETA */}
              <div className="pago-card">

                <div className="pago-card-header">
                  <h3>Tarjeta crédito / débito</h3>
                  <span style={{ fontSize: "1.4rem" }}>💳</span>
                </div>

                <p>
                  Paga con Visa o Mastercard en hasta 12 cuotas sin intereses.
                </p>

                <button
                  className="btn-pago outline"
                  onClick={() => openModal("tarjeta")}
                >
                  💳 Pagar con Tarjeta
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MODALES */}
      {modal === "pse" && <ModalPSE onClose={closeModal} />}
      {modal === "tarjeta" && <ModalTarjeta onClose={closeModal} />}

    </>
  );
}

export default Pagos;