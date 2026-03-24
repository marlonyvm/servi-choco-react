import './App.css'
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Destinos from "./components/Destinos";
import Mapa from "./components/Mapa";
import Reservar from "./components/Reservar";
import Stats from "./components/Stats";
import Login from "./components/Login";
import Pagos from "./components/Pagos";
import Testimonios from "./components/Testimonios";
import Aliados from "./components/Aliados";
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <CustomCursor/>
      <Navbar />
      <Hero />
      <Stats />
      <Nosotros />
      <Destinos />
      <Reservar />
      <Mapa />
      <Pagos/>
      <Testimonios/>
      <Aliados/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
