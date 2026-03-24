import { useState, useEffect } from "react";
import "./Reservar.css";

function Reservar() {

  const [destinos, setDestinos] = useState([]);

  const [form, setForm] = useState({
    destino: "",
    llegada: "",
    salida: "",
    viajeros: 2,
    tipo: "estandar"
  });

  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  // 🔌 Cargar destinos desde backend
  useEffect(() => {
    fetch("https://servichoco-production.up.railway.app/destinos")
      .then(res => res.json())
      .then(data => setDestinos(data))
      .catch(err => console.error(err));
  }, []);

  // 📝 Manejo de inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id.replace("f-", "")]: e.target.value
    });
  };

  // 💰 Cotización dinámica
  const cotizar = () => {

    setError("");
    setResultado("");

    if (!form.destino) return setError("Selecciona un destino");
    if (!form.llegada) return setError("Selecciona fecha de llegada");
    if (!form.salida) return setError("Selecciona fecha de salida");
    if (form.llegada > form.salida) return setError("Fechas inválidas");

    const destinoSeleccionado = destinos.find(
      d => d.nombre === form.destino
    );

    if (!destinoSeleccionado) {
      return setError("Destino no encontrado");
    }

    const base = Number(destinoSeleccionado.precio);

    const factor =
      form.tipo === "premium" ? 1.5 :
        form.tipo === "aventura" ? 1.8 : 1;

    const precio = base * form.viajeros * factor;

    setResultado(`
Destino: ${form.destino}
Viajeros: ${form.viajeros}
Experiencia: ${form.tipo}
Precio estimado: COP $${precio.toLocaleString()}
    `);
  };

  return (
    <section id="reservar" className="section">
      <div className="container">

        <div className="reservar-grid">

          {/* IZQUIERDA */}
          <div className="reservar-intro reveal">

            <div className="section-label">03 — Reservas</div>

            <h2 className="section-title">
              Planea tu<br /><em>aventura</em>
            </h2>

            <p>
              Cotiza tu viaje al instante. Selecciona destino, fechas y número
              de viajeros para obtener un presupuesto detallado.
            </p>

            <div className="reservar-features">

              <div className="res-feat">
                <div className="res-feat-icon">🎯</div>
                <div className="res-feat-text">
                  <h4>Guías comunitarios certificados</h4>
                  <p>Jóvenes del territorio que conocen cada sendero</p>
                </div>
              </div>

              <div className="res-feat">
                <div className="res-feat-icon">🍃</div>
                <div className="res-feat-text">
                  <h4>Todo incluido</h4>
                  <p>Transporte fluvial, alimentación y hospedaje comunitario</p>
                </div>
              </div>

              <div className="res-feat">
                <div className="res-feat-icon">♻️</div>
                <div className="res-feat-text">
                  <h4>Impacto regenerativo</h4>
                  <p>El 30% va directo a restauración de cuencas</p>
                </div>
              </div>

            </div>

          </div>

          {/* DERECHA */}
          <div className="booking-form reveal">

            <h3>Cotiza tu viaje</h3>
            <p className="form-sub">
              Obtén precio en segundos · Sin compromiso
            </p>

            {/* DESTINO DINÁMICO */}
            <div className="form-field">
              <label>🌿 Destino</label>
              <select id="f-destino" onChange={handleChange}>
                <option value="">Selecciona un destino...</option>

                {destinos.map(d => (
                  <option key={d.id} value={d.nombre}>
                    {d.emoji} {d.nombre} — {d.tipo}
                  </option>
                ))}

              </select>
            </div>

            {/* PRECIO BASE */}
            {form.destino && (
              <p className="precio-base">
                Desde: COP $
                {
                  destinos.find(d => d.nombre === form.destino)
                    ?.precio?.toLocaleString()
                }
              </p>
            )}

            {/* FECHAS */}
            <div className="form-row">

              <div className="form-field">
                <label>📅 Llegada</label>
                <input type="date" id="f-llegada" onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>📅 Salida</label>
                <input type="date" id="f-salida" onChange={handleChange} />
              </div>

            </div>

            {/* VIAJEROS Y TIPO */}
            <div className="form-row">

              <div className="form-field">
                <label>👥 Viajeros</label>
                <select id="f-viajeros" onChange={handleChange} defaultValue={2}>
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5">5+ personas</option>
                </select>
              </div>

              <div className="form-field">
                <label>🎒 Experiencia</label>
                <select id="f-tipo" onChange={handleChange}>
                  <option value="estandar">Estándar</option>
                  <option value="premium">Premium</option>
                  <option value="aventura">Aventura</option>
                </select>
              </div>

            </div>

            {/* BOTÓN */}
            <button className="btn-reservar" onClick={cotizar}>
              Calcular cotización →
            </button>

            {/* RESULTADO */}
            {error && <p className="error">{error}</p>}
            {resultado && <pre className="resultado">{resultado}</pre>}

            <div className="form-secure">
              🔒 Reserva segura · Sin cargos ocultos
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Reservar;