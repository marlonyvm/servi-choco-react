import { useEffect, useRef, useState } from "react";
import "./Stats.css";

function Stats() {

    const [stats, setStats] = useState([]);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef();

    // 🔹 Cargar datos desde backend
    useEffect(() => {
        fetch("https://servichoco-production.up.railway.app/estadisticas")
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error(err));
    }, []);

    // 🔥 Detectar cuando entra en pantalla
    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

    }, []);

    return (
        <section className="stats-band" ref={sectionRef}>

            {stats.map((s) => (
                <div key={s.id} className="stat-cell">

                    <div className="stat-num">
                        <Contador valor={s.valor} visible={visible} />
                        {s.sufijo}
                    </div>

                    <div className="stat-label">
                        {s.nombre}
                    </div>

                </div>
            ))}

        </section>
    );
}

export default Stats;

/* 🔥 COMPONENTE CONTADOR */
function Contador({ valor, visible }) {

    const [count, setCount] = useState(0);

    useEffect(() => {

        if (!visible) return;

        let start = 0;
        const end = valor;
        const duration = 1200;
        const increment = end / 60;

        const timer = setInterval(() => {

            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }

        }, 20);

        return () => clearInterval(timer);

    }, [visible, valor]);

    return count;
}