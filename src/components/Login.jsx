import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://servichoco-production.up.railway.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Error al iniciar sesión");
      return;
    }

    // 🔐 Guardar token
    if (remember) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.name);
    } else {
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", data.name);
    }

    // 🚀 Redirigir
    window.location.href="/";

  } catch (err) {
    console.error(err);
    alert("Error conectando con el servidor");
  }
};

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <h1>
              SERVI<em>CHOCO</em>
            </h1>
            <p>Accede a tu cuenta para gestionar tus viajes</p>
          </div>

          {/* Formulario */}
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-options">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Recordarme
              </label>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="btn-login">
              Iniciar sesión →
            </button>
          </form>

          {/* Divider */}
          <div className="login-divider">
            <span>o</span>
          </div>

          {/* Google */}
          <button className="google-btn">Continuar con Google</button>

          {/* Footer */}
          <div className="login-footer">
            ¿No tienes cuenta? {" "}
            <span onClick={() => navigate("/registro")} style={{cursor:"pointer"}}>
              Regístrate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
