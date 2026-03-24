import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el login, por ejemplo llamar a tu API
    console.log({ email, password, remember });
  };

  return (
    <div className="login-bg">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Volver al inicio
      </button>
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
            ¿No tienes cuenta? <a href="#">Crear cuenta</a>
          </div>
        </div>
      </div>
    </div>
  );
}
