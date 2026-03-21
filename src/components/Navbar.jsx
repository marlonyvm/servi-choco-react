import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../images/logo-navbar.png";
import AudioPlayer from "./AudioPlayer";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        const height = sec.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const irA = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="nav-logo">
        <img src={logo} alt= "Servichocó"/>
      </div>

      {/* BOTÓN MOBILE */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <button className={active==="nosotros" ? "active" : ""} onClick={() => irA("nosotros")}>Nosotros</button>
        <button className={active==="destinos" ? "active" : ""} onClick={() => irA("destinos")}>Destinos</button>
        <button className={active==="mapa" ? "active" : ""} onClick={() => irA("mapa")}>Mapa</button>
        <button className={active==="pago" ? "active" : ""}>Pago</button>
        <button className={active==="login" ? "active" : ""}>Login</button>
        <button 
          className="cta"
          onClick={() => irA("reserva")}
        >
          Reservar
        </button>
      </div>
      <div className="AudioPlayer"><AudioPlayer/></div>
    </nav>
  );
}

export default Navbar;