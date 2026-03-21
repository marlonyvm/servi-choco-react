import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Destinos from "./components/Destinos";
import "leaflet/dist/leaflet.css";
import Mapa from "./components/Mapa";
import Reservar from "./components/Reservar";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Stats/>
      <Nosotros/>
      <Destinos/>
      <Mapa/>
      <Reservar/>

    </>
  );
}

export default App;
