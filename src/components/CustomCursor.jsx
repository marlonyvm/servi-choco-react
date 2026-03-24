import { useEffect } from "react";
import "./CustomCursor.css";

function CustomCursor() {

  useEffect(() => {
    const cur = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    // 🖱️ movimiento
    const moveCursor = (e) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";

      setTimeout(() => {
        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";
      }, 60);
    };

    document.addEventListener("mousemove", moveCursor);

    // 🎯 hover efectos
    const hoverElements = document.querySelectorAll(
      "a, button, [class*='card'], [class*='item']"
    );

    const enter = () => {
      cur.style.width = "20px";
      cur.style.height = "20px";
      ring.style.width = "50px";
      ring.style.height = "50px";
    };

    const leave = () => {
      cur.style.width = "10px";
      cur.style.height = "10px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    // 🧹 cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" className="cursor"></div>
      <div id="cursor-ring" className="cursor-ring"></div>
    </>
  );
}

export default CustomCursor;