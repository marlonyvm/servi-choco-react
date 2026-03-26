import './App.css'
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import AIWidget from './components/AIWidget';
import Navbar from "./components/Navbar";
import BarraUsuario from './components/BarraUsuario';
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Destinos from "./components/Destinos";
import Mapa from "./components/Mapa";
import Reservar from "./components/Reservar";
import Stats from "./components/Stats";
import Login from "./components/Login";
import Registro from './components/Registro';
import Pagos from "./components/Pagos";
import Testimonios from "./components/Testimonios";
import Aliados from "./components/Aliados";
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Nosotros />
      <Destinos />
      <Reservar />
      <Mapa />
      <Pagos />
      <Testimonios />
      <Aliados />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <CustomCursor />
      <AIWidget />
      <div className='top-bar'><Navbar />
        <BarraUsuario /></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
