import { useState, useRef, useEffect } from "react";
import "./AIWidget.css";

function AIWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "¡Hola! 🌿 Soy tu guía virtual. Puedo ayudarte a elegir destino, planear tu itinerario y resolver todas tus dudas sobre el Chocó. ¿Empezamos?"
    }
  ]);
  const [input, setInput] = useState("");

  const msgsRef = useRef();

  const toggleAI = () => {
    setOpen(!open);
  };

  const sendAI = () => {
    if (!input.trim()) return;

    // mensaje usuario
    const userMsg = { from: "user", text: input };

    // respuesta fake (luego conectamos API 👀)
    const botMsg = {
      from: "bot",
      text: "🌿 Estoy pensando... pronto te conectaré con respuestas reales."
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") sendAI();
  };

  const chip = (text) => {
    setInput(text);
  };

  // auto scroll
  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="ai-widget">

      {/* BOTÓN */}
      <button className="ai-toggle" onClick={toggleAI}>
        🌿
        <div className="ai-dot"></div>
      </button>

      {/* VENTANA */}
      <div className={`ai-window ${open ? "open" : ""}`}>

        <div className="ai-head">
          <div className="ai-avatar-box">🌿</div>
          <div>
            <div className="ai-n">Chocó Guide IA</div>
            <div className="ai-s">● EN LÍNEA</div>
          </div>
          <button className="ai-head-close" onClick={toggleAI}>✕</button>
        </div>

        {/* MENSAJES */}
        <div className="ai-msgs" ref={msgsRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`ai-msg ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* CHIPS */}
        <div className="ai-chips">
          {[
            "¿Qué destinos hay?",
            "¿Cuánto cuesta?",
            "¿Cómo llego?",
            "¿Qué llevar?"
          ].map((c, i) => (
            <button key={i} className="ai-chip" onClick={() => chip(c)}>
              {c}
            </button>
          ))}
        </div>

        {/* INPUT */}
        <div className="ai-inp-area">
          <input
            className="ai-inp"
            placeholder="Pregunta sobre el Chocó..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
          />
          <button className="ai-send" onClick={sendAI}>
            ➤
          </button>
        </div>

        <div className="ai-foot">
          Potenciado por <span>IA</span>
        </div>
      </div>
    </div>
  );
}

export default AIWidget;