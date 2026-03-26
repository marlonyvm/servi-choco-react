import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./Mapa.css";

// 🔥 FIX iconos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 🔥 COMPONENTE PARA MOVER EL MAPA
function MoverMapa({ destino }) {
  const map = useMap();

  useEffect(() => {
    if (destino) {
      map.flyTo([destino.lat, destino.lng], 11, {duration:1.5});
    }
  }, [destino, map]);

  return null;
}

function Mapa() {

  const [destinos, setDestinos] = useState([]);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);
  const markersRef = useRef({});

  // 🔹 Cargar destinos
  useEffect(() => {
    fetch("https://servichoco-production.up.railway.app/destinos")
      .then(res => res.json())
      .then(data => setDestinos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="section" id="territorio">
      <div className="container">
        <div className="mapa-header">
          <div className="section-label">04 — Territorio</div>
          <h2>Mapa del <em>Chocó</em></h2>
          <p>Explora los municipios y destinos turísticos del departamento.
            Haz clic en cada marcador para más información.</p>
        </div>
        <div className="mapa-container">

          {/* 🟢 LISTA */}
          <div className="mapa-list">
            <h4>📍 Destinos</h4>
            {destinos.map(d => (
              <div
                key={d.id}
                className="mapa-item"
                onClick={() => {
                  setDestinoSeleccionado({
                    lat: Number(d.lat),
                    lng: Number(d.lng),
                    id: d.id
                  });

                  // 🔥 abrir popup
                  setTimeout(() => {
                    const marker = markersRef.current[d.id];
                    if (marker) {
                      marker.openPopup();
                    }
                  }, 800); // espera a que el mapa se mueva
                }}
              >
                <div className="m-name">
                  {d.emoji} {d.nombre}
                </div>

                <div className="m-tipo">
                  {d.tipo}
                </div>

                <div className="m-precio">
                  Desde ${(d.precio / 1000).toFixed(0)}k
                </div>
              </div>
            ))}
          </div>

          {/* 🔵 MAPA */}
          <MapContainer
            center={[5.8, -76.9]}
            zoom={7}
            className="mapa"
          >

            {/* 🔥 mueve el mapa */}
            <MoverMapa destino={destinoSeleccionado} />

            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{ attribution:'Tiles © Esri" attribution="&copy; OpenStreetMap &copy; CartoDB" />

            {destinos.map(d => (
              <Marker
                key={d.id}
                position={[Number(d.lat), Number(d.lng)]}
                ref={(ref) => {
                  if (ref) {
                    markersRef.current[d.id] = ref;
                  }
                }}
              >
                <Popup>
                  <strong>{d.emoji} {d.nombre}</strong><br />
                  {d.tipo}<br />
                  COP ${Number(d.precio).toLocaleString()}
                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>
      </div>
    </section>
  );
}

export default Mapa;