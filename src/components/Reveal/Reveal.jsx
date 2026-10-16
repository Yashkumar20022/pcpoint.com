import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

// Fades a block in when it scrolls into view.
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setOn(true);
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setOn(true), io.disconnect()),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={`rv ${on ? "in" : ""} ${className}`}>{children}</div>;
}
