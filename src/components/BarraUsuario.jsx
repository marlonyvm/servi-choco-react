import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BarraUsuario.css";

export default function BarraUsuario() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const name =
      localStorage.getItem("user") ||
      sessionStorage.getItem("user");

    if (name) {
      setUser(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
    window.location.reload(); // 🔥 refresca UI
  };

  if (!user) return null;

  return (
    <div className="user-bar">
      <span>Hola, {user} 👋</span>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}