import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

export default function Registro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://servichoco-production.up.railway.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error al registrarse");
        return;
      }

      // ✅ Registro exitoso
      alert("Cuenta creada correctamente 🎉");
      navigate("/login");

    } catch (err) {
      console.error(err);
      setError("Error conectando con el servidor");
    }
  };

  return (
    <div className="login-bg">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Volver al inicio
      </button>

      <div className="login-container">
        <div className="login-card">

          <div className="login-header">
            <h1>SERVI<em>CHOCO</em></h1>
            <p>Crea tu cuenta para empezar a viajar</p>
          </div>

          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Correo</label>
              <input
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                onChange={handleChange}
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="btn-login">
              Crear cuenta →
            </button>
          </form>

          <div className="login-footer">
            ¿Ya tienes cuenta?{" "}
            <span onClick={() => navigate("/login")} style={{cursor:"pointer"}}>
              Iniciar sesión
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}