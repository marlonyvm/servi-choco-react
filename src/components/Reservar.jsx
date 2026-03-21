import { useState } from "react";
import "./Reservar.css";

function Reservar() {

  const [form, setForm] = useState({
    destino: "",
    llegada: "",
    salida: "",
    viajeros: 1,
    tipo: "estandar"
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const calcular = () => {

    if (!form.destino || !form.llegada || !form.salida) {
      alert("Completa todos los campos");
      return;
    }

    if (form.llegada > form.salida) {
      alert("Fechas inválidas");
      return;
    }

    // 💰 lógica simple (luego la puedes mejorar)
    const base = 200000;
    const factor =
      form.tipo === "premium" ? 1.5 :
      form.tipo === "aventura" ? 1.8 : 1;

    const precio =
      base * form.viajeros * factor;

    setResultado(precio);
  };

  return (
    <section className="reserva" id="reserva">

      <h2>Reserva tu experiencia</h2>

      <div className="reserva-box">

        {/* FORM */}
        <div className="reserva-form">

          <select name="destino" onChange={handleChange}>
            <option value="">Selecciona destino</option>
            <option>Nuquí</option>
            <option>Bahía Solano</option>
            <option>Tutunendo</option>
            <option>Acandí</option>
          </select>

          <input
            type="date"
            name="llegada"
            onChange={handleChange}
          />

          <input
            type="date"
            name="salida"
            onChange={handleChange}
          />

          <input
            type="number"
            name="viajeros"
            min="1"
            value={form.viajeros}
            onChange={handleChange}
          />

          <select name="tipo" onChange={handleChange}>
            <option value="estandar">Estándar</option>
            <option value="premium">Premium</option>
            <option value="aventura">Aventura</option>
          </select>

          <button onClick={calcular}>
            Calcular
          </button>

        </div>

        {/* RESULTADO */}
        {resultado && (
          <div className="reserva-result">

            <h3>Estimación</h3>

            <p>
              Precio estimado:
            </p>

            <strong>
              COP ${resultado.toLocaleString()}
            </strong>

          </div>
        )}

      </div>

    </section>
  );
}

export default Reservar;