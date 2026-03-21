function DestinoCard({ destino, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >
      <h3>{destino.nombre}</h3>
      <p>{destino.tipo}</p>
      <strong>COP ${destino.precio}</strong>
    </div>
  );
}

export default DestinoCard;