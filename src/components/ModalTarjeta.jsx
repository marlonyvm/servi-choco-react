import { useState } from "react";

function ModalTarjeta({ onClose }) {

  const [card, setCard] = useState("");

  const formatCard = (value) => {
    return value
      .replace(/\D/g, "")
      .substring(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const handleCardChange = (e) => {
    setCard(formatCard(e.target.value));
  };

  const confirmarTarjeta = () => {
    alert("✅ Procesando pago");
    onClose();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal modal-white" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>✕</button>

        <h3 style={{ color: "#1a3a1a" }}>
          Pago con <em style={{ color: "#2d7a3a" }}>Tarjeta</em>
        </h3>

        <p className="m-sub">Visa · Mastercard · Débito y Crédito</p>

        <div className="pf">
          <label>Número de tarjeta</label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            value={card}
            onChange={handleCardChange}
          />
        </div>

        <div className="pf">
          <label>Nombre en la tarjeta</label>
          <input type="text" placeholder="Como aparece impreso" />
        </div>

        <div className="grid-2">
          <div className="pf">
            <label>Vencimiento</label>
            <input type="text" placeholder="MM/AA" maxLength={5} />
          </div>
          <div className="pf">
            <label>CVV</label>
            <input type="text" placeholder="***" maxLength={4} />
          </div>
        </div>

        <div className="pf">
          <label>Cuotas</label>
          <select>
            <option>1 cuota (sin intereses)</option>
            <option>3 cuotas</option>
            <option>6 cuotas</option>
            <option>12 cuotas</option>
          </select>
        </div>

        <button className="btn-pse-confirm" onClick={confirmarTarjeta}>
          🔒 Pagar ahora
        </button>

      </div>
    </div>
  );
}

export default ModalTarjeta;