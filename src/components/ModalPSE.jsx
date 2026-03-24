import { useState } from "react";

function ModalPSE({ onClose }) {

  const [banco, setBanco] = useState("");
  const [persona, setPersona] = useState("Persona Natural");

  const seleccionarBanco = (b) => setBanco(b);

  const confirmarPSE = () => {
    alert("✅ Redirigiendo al portal seguro de tu banco");
    onClose();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal modal-white" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>✕</button>

        <h3 style={{ color: "#1a3a1a" }}>
          Pago por <em style={{ color: "#2d7a3a" }}>PSE</em>
        </h3>

        <p className="m-sub">Débito directo desde tu cuenta bancaria</p>

        <div className="pf">
          <label>Tipo de persona</label>
          <select value={persona} onChange={(e) => setPersona(e.target.value)}>
            <option>Persona Natural</option>
            <option>Persona Jurídica</option>
          </select>
        </div>

        <div className="pf">
          <label>Número de documento</label>
          <input type="text" placeholder="Ej: 1000123456" />
        </div>

        <div className="pf">
          <label>Correo electrónico</label>
          <input type="email" placeholder="tu@correo.com" />
        </div>

        <p className="bank-title">
          Selecciona tu banco
        </p>

        <div className="bank-grid">
          {["Bancolombia","Davivienda","Banco de Bogotá","BBVA","Nequi","Otro banco"].map(b => (
            <button
              key={b}
              className={`bank-btn ${banco === b ? "sel" : ""}`}
              onClick={() => seleccionarBanco(b)}
            >
              {b}
            </button>
          ))}
        </div>

        <button className="btn-pse-confirm" onClick={confirmarPSE}>
          Continuar con PSE →
        </button>

        <p className="m-foot">
          Serás redirigido al portal seguro de tu banco
        </p>

      </div>
    </div>
  );
}

export default ModalPSE;