import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../images/logo-navbar.png";
import AudioPlayer from "./AudioPlayer";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const irA = (seccion) => {
    if (location.pathname !=="/"){
      navigate("/");
      setTimeout(()=> {
        const el = document.getElementById(seccion);
        if (el){
          el.scrollIntoView({behavior:"smooth"});
        }
      },100);
    } else {
      const el = document.getElementById(seccion);
      if (el){ 
        el.scrollIntoView({behavior: "smooth"});
      }
    }
    setOpen(false);
  };
  

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="nav-logo" onClick={()=>
        irA("hero")}>
        <img src={logo} alt="Servichocó"/>
      </div>

      {/* BOTÓN MOBILE */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <button className={active === "nosotros" ? "active" : ""} onClick={() => irA("nosotros")}>Nosotros</button>
        <button className={active === "destinos" ? "active" : ""} onClick={() => irA("destinos")}>Destinos</button>
        <button className={active === "territorio" ? "active" : ""} onClick={() => irA("territorio")}>Mapa</button>
        <button className={active === "pago" ? "active" : ""} onClick={() => irA("pago")}>Pago</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button
          className="cta"
          onClick={() => irA("reservar")}
        >
          Reservar
        </button>
      </div>
      <div className="AudioPlayer"><AudioPlayer /></div>
    </nav>
  );
}

export default Navbar;